// import React, { useState, useEffect } from 'react';
// import Inputs from "../Components/Inputs/Inputs"

// const AgeCalculator = () => {
//   const [dob, setDob] = useState('');
//   const [age, setAge] = useState('');

//   const calculateAge = (dob) => {
//     const birthDate = new Date(dob);
//     const today = new Date();
//     const age = today.getFullYear() - birthDate.getFullYear();
//     const monthDiff = today.getMonth() - birthDate.getMonth();

//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//       return age - 1;
//     }
//     return age;
//   };

//   useEffect(() => {
//     if (dob) {
//       const calculatedAge = calculateAge(dob);
//       setAge(calculatedAge);
//     } else {
//       setAge('');
//     }
//   }, [dob]);

//   return (
//     <div style={{ maxWidth: '400px', margin: 'auto' }}>
//       <h2>Age Calculator</h2>
//       <form>
//         <div>
//           <label htmlFor="dob">Date of Birth:</label>
//           <Inputs
//             type="date"
//             id="dob"
//             value={dob}
//             onChange={(e) => setDob(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="age">Age:</label>
//           <Inputs
//             type="number"
//             id="age"
//             value={age}
//             readOnly
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AgeCalculator;



///////////////////////////////


import React, { useState, useEffect } from 'react';
import { Container, TextField, Typography, Box, Grid, Checkbox, FormControlLabel } from '@mui/material';

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [styles, setStyles] = useState({
    styleOne: false,
    styleTwo: false,
    styleThree: false,
    all: false,
  });

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age -= 1;
    }
    return age;
  };

  useEffect(() => {
    if (dob) {
      const calculatedAge = calculateAge(dob);
      setAge(calculatedAge);
    } else {
      setAge('');
    }
  }, [dob]);

  const handleStyleChange = (event) => {
    const { name, checked } = event.target;

    // If "All" checkbox is checked, set all styles to true
    if (name === 'all') {
      setStyles({
        styleOne: checked,
        styleTwo: checked,
        styleThree: checked,
        all: checked,
      });
    } else {
      // If any style is unchecked, uncheck "All"
      if (checked) {
        setStyles((prev) => ({ ...prev, [name]: checked }));
      } else {
        setStyles((prev) => ({ ...prev, [name]: checked, all: false }));
      }
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 4, p: 3, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h5" component="h2" align="center" gutterBottom>
          Age Calculator
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <TextField
              label="Date of Birth"
              type="date"
              fullWidth
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Age"
              type="number"
              fullWidth
              value={age}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
        </Grid>
        
        {/* Checkboxes Section */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Select Styles
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={styles.all}
                onChange={handleStyleChange}
                name="all"
              />
            }
            label="All"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={styles.styleOne}
                onChange={handleStyleChange}
                name="styleOne"
              />
            }
            label="Style One"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={styles.styleTwo}
                onChange={handleStyleChange}
                name="styleTwo"
              />
            }
            label="Style Two"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={styles.styleThree}
                onChange={handleStyleChange}
                name="styleThree"
              />
            }
            label="Style Three"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default AgeCalculator;