// pages/about.tsx
import { useEffect, useState } from 'react';
import supabase from './utils/supabase';
import styles from '../styles/About.module.css'; // Import your CSS module

export default function About() {
  const [data, setData] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data, error } = await supabase.from('EditorContent').select('text');

        if (error) {
          throw new Error(error.message);
        }

        // Ensure data is an array
        if (!Array.isArray(data)) {
          throw new Error('Invalid data structure');
        }

        const textValues = data.map((item) => item.text);
        console.log('Text Data:', textValues);
        setData(textValues);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setError(error.message);
      }
    };

    getData();
  }, []);

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  return (
    <div>
      {data.map((text, index) => (
        <p key={index} className={styles.postBox}>{text}</p>
      ))}
    </div>
  );
}
