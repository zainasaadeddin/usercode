import { useState, useEffect } from 'react';
import mockCoursesData from './mockCoursesData.json';

export default function useFetch(queryField, queryAttributesStr) {
  // Declaring the essential state variables for data and checking
  // if the request is loading or succeeded
  const [data, setData] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extracting API key and endpoint URL from the keys.json file
    const apiEndpointBaseUrl = '{{BACKEND_API_URl}}';

    // Changing loading and success state to true whenever there's an effect
    setLoading(true);
    setSuccess(false);

    // Initializing a controller for the API call
    const controller = new AbortController();

    // Extracting data from queryAttributesStr
    const queryAttributes = JSON.parse(queryAttributesStr);

    // Function to construct and return the URL with
    // the required query parameters
    function getURLQuery(requestField, inputData) {
      const id = Math.floor(Math.random() * (999999 - 100 + 1) + 100);
      const newMockCourseData = JSON.stringify(mockCoursesData.courses);
      console.log(newMockCourseData);
      switch (requestField) {
        case 'getCourse':
          return `${apiEndpointBaseUrl}/courses?action=${requestField}&id=${inputData.id}`;
        case 'addCourse':
          return `${apiEndpointBaseUrl}/courses?action=${requestField}&id=${id}&courseName=${inputData.courseTitle}&courseUrl=${inputData.courseUrl}&courseAuthor=${inputData.courseAuthor}&courseCoverArt=${inputData.imgUrl}`;
        case 'editCourse':
          return `${apiEndpointBaseUrl}/courses?action=${requestField}&id=${inputData.id}&courseName=${inputData.courseTitle}&courseUrl=${inputData.courseUrl}&courseAuthor=${inputData.courseAuthor}&courseCoverArt=${inputData.imgUrl}`;
        case 'removeCourse':
          return `${apiEndpointBaseUrl}/courses?action=${requestField}&id=${inputData.id}`;
        case 'allCourses':
          return `${apiEndpointBaseUrl}/courses?action=${requestField}`;
        case 'populateCourses':
          return `${apiEndpointBaseUrl}/courses?action=${requestField}&data=${newMockCourseData}`;
        default:
          return apiEndpointBaseUrl;
      }
    }

    // asynchronous function to make API call
    async function fetchData() {
      try {
        // Constructing URL for request
        const backendServiceUrlQuery = encodeURI(getURLQuery(queryField, queryAttributes));

        // Constructing the options object
        const options = {
          method: 'GET',
          signal: controller.signal,
          headers: {
            'content-type': 'application/json',
          },
        };

        // Making API call through custom proxy server
        const response = await fetch(backendServiceUrlQuery, options);

        // Checking if the request was a success
        setSuccess(response.ok);
        if (!response.ok) {
          if (response.errorMessage) {
            throw new Error(`Status Code: Internal Error\nError Message: ${response.errorMessage}`);
          } else if (!response.bodyUsed) {
            throw new Error(`Status Code: ${response.status}\nError Message: ${response.statusText}`);
          } else {
            const errorResponse = await response.json();
            throw new Error(`Status Code: ${response.status}\nAPI Error Message: ${errorResponse.message}`);
          }
        }

        // Extracting the content body
        const content = await response.json();

        // Saving retrieved data
        setData(content);
      } catch (error) {
        console.log(error.message);
        setData({ error: `${error}` });
        setSuccess(false);
      } finally {
        // Changing loading state to false whenever the API request ends in success or failure
        setLoading(false);
      }
    }

    // Making sure that a null field is not passed
    if (queryField) {
      fetchData();
    } else {
      setLoading(false);
      setSuccess(true);
    }

    // Cancelling the fetch request in case the user navigates
    // away from screen
    return () => {
      controller.abort();
    };

  // Defining variables that trigger useFetch
  }, [queryField, queryAttributesStr]);

  // Returning useFetch response
  return { data, success, loading };
}
