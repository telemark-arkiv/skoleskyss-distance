[![Build Status](https://travis-ci.org/telemark/skoleskyss-distance.svg?branch=master)](https://travis-ci.org/telemark/skoleskyss-distance)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/skoleskyss-distance.svg)](https://greenkeeper.io/)

# skoleskyss-distance

Microservice for skoleskyss and distance

## API

All calls must supply a valid jwt

### ```POST /distance```

Calculate walking distance between origin and destination

```JavaScript
{
  origin: '',
  destination: '',
  waypoints: []
}
```

```bash
$ curl -v -H "Authorization: <INSERT TOKEN>" -d '{ "origin": "", "destination": "", "waypoints": [] }' https://distance.service.io/distance
```

## License

[MIT](LICENSE)

![Robohash image of skoleskyss-distance](https://robots.kebabstudios.party/skoleskyss-distance.png "Robohash image of skoleskyss-distance")