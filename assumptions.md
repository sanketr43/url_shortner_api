## Assumptions

As marketing department using Long URL, which can be ruined with formatter. And we have to hash that URL.  

I assume it to create short URL for each Long URL. This can be done by storing long URL in the database having Unique Code. 

This Unique Code can be used in short URL to identify & fetch long URL from database and then redirecting those users to 

the intended Long URL.


So, We need two API as below

1. To create Unique code for each Long URL and store in the database. 

- For future scalabilty Unique code, lets say we have to make distributed server for storing the URLs with unique code, we need 

Unique ID generator feature. For that most popular is twitter Snowflake ID generator algorithim. So, I am using this simple ID generator 

package to maintaine the unique code for each URL throughout the time. 

2. Another API is to get the long URL based on the queried unique Code. If its available then return the Orginal URL.



## Database Schema

For storage I am using MongoDB. To store the Long URL the schema desgined as below,

_id
-unique_code
-original_url
-visits
-created_at
-updated_at
