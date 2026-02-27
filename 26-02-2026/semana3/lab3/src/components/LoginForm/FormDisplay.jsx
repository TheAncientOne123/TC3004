import React from 'react';
import { formDataToDisplay } from '../../helpers/formHelpers';

export const FormDisplay = ({ data }) => {
  const items = formDataToDisplay(data);

  return (
    <div className="form-display">
      {items.map(({ label, value }) => (
        <p key={label}><strong>{label}:</strong> {value}</p>
      ))}
    </div>
  );
};
