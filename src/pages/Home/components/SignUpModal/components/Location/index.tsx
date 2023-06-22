import React, { SyntheticEvent, useEffect, useState } from "react";
import { Autocomplete, TextField, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { UserSelectors, useUserActions } from "@redux";
import { steps } from "constants/steps";
import { getLocations } from "requests";

function Location() {
  const { setUserLocation, setCurrentStep } = useUserActions();
  const user = useSelector(UserSelectors.getUser);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search) {
      (async () => {
        try {
          const data = await getLocations(search);
          setOptions(data.Data || []);
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log(e);
        }
      })();
    }
  }, [search]);

  const handleInputChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setSearch(target.value);
  };
  const handleChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setUserLocation(target.value);
  };

  const handleNext = () => {
    setCurrentStep(steps[5]);
  };

  return (
    <>
      <Autocomplete
        fullWidth
        onInputChange={handleInputChange}
        onSelect={handleChange}
        options={options}
        renderInput={(params) => <TextField {...params} label="Location" />}
      />
      <Button
        style={{ marginTop: "35px", height: "48px" }}
        onClick={handleNext}
        disabled={!user.location}
        className="next"
        fullWidth
        variant="contained"
      >
        Next
      </Button>
    </>
  );
}

export default Location;
