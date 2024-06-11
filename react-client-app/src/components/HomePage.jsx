import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageError from './errorPages/PageError';
import Loading from './loading/Loading';
import useFetch from '../hooks/useFetch';
import CardList from './CardList';
import NewCourseForm from './NewCourseForm';

export default function HomePage() {
  const [field, setField] = useState('allCourses');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [author, setAuthor] = useState('');
  const [id, setId] = useState('');

  const queryParams = {
    id: `${id}`,
    courseTitle: `${title}`,
    courseUrl: `${url}`,
    imgUrl: `${imgUrl}`,
    courseAuthor: `${author}`,
  };

  // Initializing API Call with a useFetch function
  const {
    data: courseData,
    success: callSuccess,
    loading: callLoading,
  } = useFetch(
    field,
    JSON.stringify(queryParams),
  );

  // Function to re-update GraphQL query parameters fetch list of courses
  // when either a course had been added, edited, or deleted
  useEffect(() => {
    if (!callLoading && field !== 'allCourses') {
      setField('allCourses');
      setTitle('');
      setUrl('');
      setImgUrl('');
      setAuthor('');
      setId('');
    }
  }, [callLoading]);

  if (callLoading) {
    return (
      <Loading />
    );
  } if (!(callSuccess)) {
    if (!courseData.success) {
      console.error(`The following errors were encountered:\nError -> ${courseData.error}\n`);
      return (
        <PageError errorMessage={`The following errors were encountered:\nError -> ${courseData.error}\n`} />
      );
    }
    return (
      <PageError errorMessage="Oops! Something went wrong" />
    );
  } if (courseData.action !== 'allCourses') {
    if (courseData.action === 'addCourse') {
      return (
        <Container className="center-container">
          <pre>
            <h1 className="text-title-color">The course was added successfully</h1>
          </pre>
        </Container>
      );
    }
    if (courseData.action === 'editCourse') {
      return (
        <Container className="center-container">
          <pre>
            <h1 className="text-title-color">The course was modified successfully</h1>
          </pre>
        </Container>
      );
    }
    if (courseData.action === 'removeCourse') {
      return (
        <Container className="center-container">
          <pre>
            <h1 className="text-title-color">The course was removed successfully</h1>
          </pre>
        </Container>
      );
    }
    return (
      <Loading />
    );
  }

  return (
    <Container>
      <Col className="align-items-center">
        <Row style={{ paddingTop: '10px' }}>
          <h1 className="header1-design">Educative Courses List</h1>
        </Row>
        <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
          <CardList data={courseData} type="course" setField={setField} setTitle={setTitle} setUrl={setUrl} setImgUrl={setImgUrl} setAuthor={setAuthor} setId={setId} />
        </Row>
        <hr style={{ color: '#ffffff' }} />
        <Row style={{ paddingTop: '10px' }}>
          <h1 className="header1-design">Add a Course</h1>
        </Row>
        <Row style={{ paddingTop: '20px' }}>
          <NewCourseForm
            setField={setField}
            setTitle={setTitle}
            setUrl={setUrl}
            setImgUrl={setImgUrl}
            setAuthor={setAuthor}
            setId={setId}
          />
        </Row>
      </Col>
    </Container>
  );
}
