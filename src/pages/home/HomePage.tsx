<<<<<<< HEAD
import React from 'react'
import Navbar from '../../components/Navbar'
import Publication from '../../components/Publication'
=======
import React from "react";
import { useEffect, useState } from "react";
import { mockHomeData } from "../../mock/example_mock_data";

interface APIObject {
  object: DataObject;
}

interface DataObject {
  slug: string;
  title: string;
  metadata: Metadata;
}

interface Metadata {
  heading: string;
  subheading: string;
  image: Image;
}

interface Image {
  url: string;
  imgix_url: string;
}
>>>>>>> 9a62230b6818c09b383ca30b6401cb666b3562f3

export default function HomePage() {
  const [data, setData] = useState<APIObject>();

  async function fetchMockData() {
    return mockHomeData;
  }

  async function fetchData() {
    //this would be the actuall call to the API where we input our query and get the response back.
  }

  useEffect(() => {
    //here we are mocking the API call
    fetchMockData()
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.log("Error fetching the data:", error);
        //error handle on the front end
      });
  }, []);

  return (
<<<<<<< HEAD
    <>
      <Navbar />
      <div>
        <Publication
          title="Cognitive Decline in Aging: A Comprehensive Review"
          authors="John Doe, Jane Smith"
          journal="Journal of Cognitive Science"
          date="2023"
        />
        <Publication
          title="Effects of Sleep on Memory Retention in Older Adults"
          authors="Alice Johnson, Michael Lee"
          journal="Aging & Cognition Research"
          date="2022"
        />
      </div>

    </>
  )
=======
    <div className="App">
      <div>
        <h1>This is our super cool website lol</h1>
      </div>
      <div>
        {data ? (
          <>
            <h2>{data.object.metadata.heading}</h2>
            <h3>{data.object.metadata.subheading}</h3>
            {data.object.metadata.image.url && (
              <img
                src={data.object.metadata.image.url}
                alt={data.object.metadata.heading}
              />
            )}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
>>>>>>> 9a62230b6818c09b383ca30b6401cb666b3562f3
}
