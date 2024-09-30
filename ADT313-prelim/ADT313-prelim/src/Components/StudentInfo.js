// src/components/StudentInfo.js
import React, { useState } from 'react';

const StudentInfo = () => {
const [name, setName] = useState('');
const [section, setSection] = useState('');

return (
<div>
<h1>Student Information</h1>
<form>
<input
type="text"
placeholder="Name"
value={name}
onChange={(e) => setName(e.target.value)}
/>
<input
type="text"
placeholder="Section"
value={section}
onChange={(e) => setSection(e.target.value)}
/>
</form>
</div>
);
};

export default StudentInfo;