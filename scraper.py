from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import csv
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
Gets a list of urls of houses in a certain area on RedFin. 

Accepts url of a search of the area and the crawler driver as inputs
Returns a pair with the url of the house as ID, and a document containining the
house's features as text data.
"""
def getHouseUrls(filename):
    urls = []
    rows = []
    with open(filename) as sanFranciscoData:
        reader = csv.reader(sanFranciscoData)
        for row in reader:
            if row[0] == 'SALE TYPE':
                continue
            urls.append(row[20])
            rows.append([len(rows) + 1, row[7], row[2], row[8], row[9], row[4], row[6], row[3]])
    
        with open('sqldatabase.csv', 'w', newline='') as sqldatabase:
            writer = csv.writer(sqldatabase)
            for row in rows:
                writer.writerow(row)
            
    return urls



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

houseUrls = getHouseUrls('redfin_2021-12-05-16-23-32.csv')
print(houseUrls)

i = 0
with open('textData.txt', 'w') as dataFile:
    for url in houseUrls:
        i += 1
        url, textdata = getHouseData(url, driver)
        dataFile.write(str((i, url, textdata)))
        dataFile.write('\n')
        
    dataFile.close()
    
