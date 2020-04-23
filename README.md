# Football Score

Football score create using program NodeJS framework ExpressJS

## Installation

1. Clone git
```
https://github.com/hendras1722/football-score.git
```

2.Open terminal, type 
```
npm install
```

3. add file .env in ./footballscore 
```
PORT = 8000

DB_HOST = 'localhost'
DB_USER = 'root'
DB_PASSWORD = ''
DB_NAME = 'football'
```

4. Open aplikasi postman. Import From Link
```
https://www.getpostman.com/collections/0a170c3bdd65f75ed4e3
```

5. Result 
1. POST RecordGame
```
{
    "status": 200,
    "result": {
        "hightlights": [
            {
                "clubhomename": "Chelsea",
                "clubawayname": "Man Utd",
                "score": "1:2"
            },
            {
                "clubhomename": "Liverpool",
                "clubawayname": "Chelsea",
                "score": "1:1"
            }
        ]
    }
}
```
2. GET League Standings
```
{
    "status": 200,
    "result": [
        {
            "clubname": "Chelsea",
            "points": 3
        },
        {
            "clubname": "Liverpool",
            "points": 0
        },
        {
            "clubname": "Man Utd",
            "points": 3
        },
        {
            "clubname": "Chelsea",
            "points": 0
        }
    ]
}
```
3.GET Rank
```
{
    "status": 200,
    "result": [
        {
            "id": 1,
            "clubname": "Man Utd",
            "points": 3,
            "created_at": "2020-04-23T18:48:47.000Z",
            "updated_at": "2020-04-23T18:48:47.000Z"
        }
    ]
}
```

## Running
open your terminal. type 
```
npm start
```

## Contributing
 <img width="250" src="https://avatars1.githubusercontent.com/u/57746184?s=460&u=bfc9704fd2e0f0bdcc060e68bab55191658613c3&v=4"> 
Muhammad Syahendra Anindyantoro
