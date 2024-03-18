# Blue Prism Cloud Web Application - Schedules Section

Welcome to the Blue Prism Cloud Schedules Section README. This document provides an overview of the Schedules Section of the new web application, including its functionality, features, and implementation details.

## Overview

The Schedules Section of the Blue Prism Cloud web application allows users to view a list of schedules for one of the current sessions and its corresponding log entries. Users can select a schedule to view its log entries and have the ability to retire or unretire a schedule, preventing further log entries.

## Features

- View a list of available schedules.
- Select a schedule to view its corresponding log entries.
- Retire or unretire a schedule.

## Use Cases

- As a user, I can view a list of available schedules when I initially access the application.
- As a user, I can view the log entries corresponding to a selected schedule.
- As a user, I can retire or unretire a schedule.

## Implementation Details

The Schedules Section is built using the latest best practices and technologies. It is a frontend UI application that interacts with a RESTful API to retrieve schedule data.

### Technologies Used

- React.js: Frontend JavaScript library for building user interfaces.
- TypeScript: Typed superset of JavaScript for enhanced development experience.
- Axios: Promise-based HTTP client for making API requests.
- React-Select: Customizable select component for handling user selections.
- Tailwind CSS: Utility-first CSS framework for styling components.
- Cypress: End to end testing for the app.
- Documentation: Comprehensive documentation to guide development and usage.



## Thought Process During Breakdown Phase

During the breakdown phase, I focused on understanding the requirements and breaking down the tasks into manageable components. Thought of the user stories provided and identified the key features required for the Schedules Section. Noted potential challenges and solutions, ensuring a smooth development process. Drafted a plan to deliver a high-quality solution that meets the needs of the users.

## Installation Frontend

To run the Schedule Filter locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/afr2n/schedules.git
```

2. Navigate to the project directory:

```bash
cd schedules
```

3. Install dependencies:

```bash
npm install
```

## Usage Frontend

Once the installation is complete, you can start the development server to use the Schedules Filter:

```bash
npm run dev
```

Access the application in your web browser at [http://localhost:5173/](http://localhost:5173/).

## Installation Backend 
To host the Backend locally, please run the following command:
1. Clone the repository:
```bash
git clone https://github.com/afr2n/json-server.git
```
2. Navigate to the project directory:

```bash
cd json-server
```
3. Install dependencies:

```bash
npm install
```

## Usage Backend
Once the installation is complete, you can start the development server to use the Schedules Filter:

```bash
npm run dev
```

The following endpoints are available on the Backend: 
1. http://localhost:3000/schedules
2. http://localhost:3000/schedules/:id
3. http://localhost:3000/scheduleLogs



## Testing

The Schedule Filter includes automated tests to ensure its functionality. To run the tests, use the following command:
- End to end test: Implemented using Cypress for testing app functionality as a whole.

```bash
npx cypress run
```


## Improvements I would like to make if I had more time

### 1. Standardize Card Height and Implement Text Truncation

**Description:** Currently, the card height varies depending on the length of the content. To provide a consistent and visually appealing layout, we should standardize the height of all cards. Additionally, implement text truncation for long content with a tooltip to display the full text upon hover. And to add a functionality to the menu icon on header

**Steps to Implement:**
- Set a fixed height for all cards, ensuring consistency in the UI.
- Implement text truncation for long content using CSS ellipsis (`text-overflow: ellipsis`) property.
- Add a tooltip to display the full text when users hover over truncated content.

**Expected Outcome:** All cards will have the same height, providing a cleaner and more organized appearance. Long content will be truncated with a tooltip for users to view the full text when needed.

### 2. Implement Data Validation with Yup Schema

**Description:** Data validation is crucial to ensure the integrity and reliability of the data being submitted. By implementing data validation using Yup schema, we can enforce validation rules on form data before making POST or PATCH requests to the server.

**Steps to Implement:**
- Define Yup schema to validate form data, including field types, required fields, and any additional validation rules.
- Integrate Yup schema validation into form submission logic.
- Display error messages for invalid inputs to guide users in correcting their data.

**Expected Outcome:** Form data will be validated according to defined rules, preventing invalid or incorrect data from being submitted. Users will receive immediate feedback on any validation errors, improving the overall user experience.

### 3. Enhance Schedule Log Filters with Date Range and Dynamic Options

**Description:** The current schedule log filters have hardcoded options, limiting their flexibility and usability. Enhance the filters to include a date range option and make the filter options dynamic based on the available data.

**Steps to Implement:**
- Add date range selectors to allow users to filter schedule logs based on specific date ranges.
- Dynamically populate filter options based on the available data, ensuring users can filter by relevant criteria.
- Implement logic to fetch schedule log data based on selected filter criteria and date range.

**Expected Outcome:** Users will have more flexibility in filtering schedule log data, allowing them to narrow down their search based on specific date ranges and criteria. Dynamic filter options will adapt to the available data, providing a more intuitive filtering experience.




### Documentation

- README: Provides an overview of the Schedules Section, including functionality, features, and implementation details.
- Code Comments: Inline comments within the codebase to explain complex logic and functionalities.
- API Documentation: Describes the endpoints, request methods, and response structures of the RESTful API.

## Conclusion

The Schedules Section of the Blue Prism Cloud web application provides users with a seamless experience for managing schedules and viewing corresponding log entries. By adhering to best practices, utilizing modern technologies, and focusing on user experience, we aim to deliver a high-quality solution that meets the needs of our users.
