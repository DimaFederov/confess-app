import React from 'react';

const TermsAndConditionsPage: React.FC = () => {
  // Your terms and conditions text goes here
  const termsAndConditionsText = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod elit nec lorem congue, vel dictum felis lacinia. Vestibulum sed ullamcorper nisl, sit amet tempor odio. ...

    ... Vivamus vel vestibulum ligula. Fusce eu nunc at orci dictum elementum. Nullam vel quam vel ligula sollicitudin vehicula ut a justo.

    Donec feugiat ultricies metus, a tristique erat interdum vel. Sed at cursus urna. Nulla eget semper purus, ac interdum libero. ...
  `;

  return (
    <div className="container mx-auto mt-8 p-4 bg-black text-white">
      <h1 className="text-2xl font-semibold mb-4">Terms and Conditions</h1>
      <p className="text-gray-700">{termsAndConditionsText}</p>
    </div>
  );
};

export default TermsAndConditionsPage;
