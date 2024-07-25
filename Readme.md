# Playtube: a youtube like application

[gitignore generator](https://mrkandreev.name/snippets/gitignore-generator/)

```
<!-- DB connection string -->
mongodb+srv://wasif:<password>@playtube-cluster.8o3tcrr.mongodb.net/
```

- access token : usually short lived
- refresh token : usally long lived

Usually we validate users uing access token but they don't have to loggin again and again
if user have their refresh token then they have to hit a endpoint then if user's refresh token and db's refresh token matches then server will give a new access token to the user.

#### Aggregation pipeline

The aggregation pipeline is like a series of steps you apply to your data, each step performing a specific task to transform or analyze the data until you get the final results you need.
