# NPPES-NPI-Registry-lookup
A simple web application for custom requests to the NPI database

This web application is currently in alpha testing. While being run locally (using the address 127.0.0.1:3000), it will require disabling CORS on your browser. This has security risks and should only be done while testing, then re-enabled before browsing other sites.

Instructions for use:
  Run the server via node.js
    Download/install node.js
    Within command prompt, navigate to the folder containing server.js and run the command: node server.js
  Within a browser, navigate to the URL: 127.0.0.1:3000
  For testing only, disable CORS security
  Fill fields with parameters, then click Submit
    Currently, the raw JSON will be output onto the page

Planned milestones:
  Parse the JSON response as a table of results
  Download the results as a CSV
  Increase maximum results from 200 to 1200
  Pagination for the results table
  Input sanitizaiton
