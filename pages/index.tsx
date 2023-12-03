// pages/about.tsx
import { useEffect, useState } from 'react';
import supabase from './utils/supabase';
import styles from '../styles/About.module.css'; // Import your CSS module

export default function About() {
  const [data, setData] = useState<any[]>([]); // Change the type to 'any[]' to accommodate both text and id
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data, error } = await supabase.from('EditorContent').select('id, text'); // Fetch both columns

        if (error) {
          throw new Error(error.message);
        }

        // Ensure data is an array
        if (!Array.isArray(data)) {
          throw new Error('Invalid data structure');
        }

        console.log('Fetched Data:', data);
        setData(data);
      } catch (error) {
        let errorMessage = "Failed to do something exceptional";
        if (error instanceof Error) {
          errorMessage = error.message;
        console.error('Error fetching data:', error.message);
        setError(error.message);
        }
      }
    };

    getData();
  }, []);

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className={styles.postBox}>
          <p>ID: {item.id}</p>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
