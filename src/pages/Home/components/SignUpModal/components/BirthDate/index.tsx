import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Button, Stack } from "@mui/material";
import { useUserActions } from "@redux";
import { steps } from "constants/steps";
import { ReactComponent as Arrow } from "assets/icons/arrow-down.svg";

function BirthDate() {
  const { setUserDOB, setCurrentStep } = useUserActions();
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const isFullFiled = Boolean(day && year && month);

  const handleNext = () => {
    if (isFullFiled) {
      setUserDOB(`${year}-${month}-${day}`);
      setCurrentStep(steps[4]);
    }
  };

  return (
    <>
      <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={["DatePicker", "DatePicker", "DatePicker"]}
          >
            <Stack
              spacing={2}
              sx={{ width: "100%", margin: "0" }}
              direction="row"
            >
              <DatePicker
                slots={{
                  openPickerIcon: Arrow,
                }}
                value={day}
                onChange={(value) => {
                  setDay(value || "");
                }}
                label="Day"
                views={["day"]}
              />
              <DatePicker
                slots={{
                  openPickerIcon: Arrow,
                }}
                value={month}
                onChange={(value) => setMonth(value || "")}
                label="Month"
                views={["month"]}
              />
              <DatePicker
                slots={{
                  openPickerIcon: Arrow,
                }}
                value={year}
                onChange={(value) => setYear(value || "")}
                label="Year"
                views={["year"]}
              />
            </Stack>
          </DemoContainer>
        </LocalizationProvider>
      </Box>

      <Button
        style={{ marginTop: "35px", height: "48px" }}
        onClick={handleNext}
        disabled={!isFullFiled}
        className="next"
        fullWidth
        variant="contained"
      >
        Next
      </Button>
    </>
  );
}

export default BirthDate;
