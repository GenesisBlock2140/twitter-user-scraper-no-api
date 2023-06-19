# Twitter User Scraper (No API)

Twitter User Scraper is a project that allows you to scrape data from a Twitter account without using the official Twitter API. It utilizes Puppeteer, a Node.js library, to automate the web browser and extract information from the targeted Twitter account.

## Features

- Scrape the **description of the Twitter account**.
- Scrape the **website link** associated with the Twitter account.
- Scrape the **account's registration date**.
- Scrape the **number of followers**.
- Scrape the **number of followings**.

Please note that **extracting tweets is not currently supported** by this project. ( soon )

## Requirements

- Node.js 
- npm or yarn

## Installation

    1. Clone the repository: `git clone https://github.com/GenesisBlock2140/twitter-user-scraper-no-api`
    2. Navigate to the project directory: `cd twitter-user-scraper-no-api`
    3. Install the dependencies: `npm install`

## Usage

    1. Open the `main.js` file.
    2. Set the `username` variable to the Twitter account handle you want to scrape.
    3. Run the script: `node main.js`
    4. The script will launch a headless browser and start scraping the desired data.
    5. Once the scraping is complete, the extracted data will be displayed in the console.

## Contribution

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please feel free to open an issue or submit a pull request.