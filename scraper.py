from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import re
import urllib
import time

# from mp2.1
#uses webdriver object to execute javascript code and get dynamically loaded webcontent
def get_js_soup(url, driver):
    driver.get(url)
    res_html = driver.execute_script('return document.body.innerHTML')
    soup = BeautifulSoup(res_html,'html.parser') #beautiful soup object to be used for parsing html content
    return soup

"""
Gets text data from a specific house on RedFin. 

Accepts url of the house and the crawler driver as inputs
Returns a pair with the url of the house as ID, and a document containining the
house's features as text data.
"""
def getHouseData(url, driver):
    documentData = []
    soup = get_js_soup(url, driver)
    for properties_section in soup.find_all('section', class_='Section AmenitiesInfoSection has-top-rule'):
        htmlPointer = properties_section.find('div').find('div')
        htmlPointer = htmlPointer.find('div', class_='sectionContentContainer')
        htmlPointer = htmlPointer.find('div').find('div')
        htmlPointer = htmlPointer.find('div', class_='amenities-container')
        
        for section in htmlPointer.find_all('div', class_='super-group-content'):
            for amenity in section.find_all('div', class_='amenity-group'):
                documentData.append(amenity.getText(separator=' '))
                
        return (url, documentData)
    

# Create webdriver for headless Chrome
options = Options()
options.headless = True
driver = webdriver.Chrome('./chromedriver', options=options)

# TODO: crawl redfin site for all properties in an area, and call getHouseData on each one
testurl = 'https://www.redfin.com/CA/Los-Angeles/150-W-118th-St-90061/home/7322700'

print(getHouseData(testurl, driver))
