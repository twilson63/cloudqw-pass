# cloudqw-pass

Pass is a Cloudq worker that passes the job from the queue to a specified url performing a post.

# install

``` sh
npm install cloudqw-pass
```

# use

``` javascript
var pass = require('cloudqw-pass'),
config = {
  protocol: 'http',
  host: 'localhost:3000',
  pathname: '/foo',
  interval: 2000
}
pass(config, 'http://foo.com/api/resource', function(err, res){
  console.log('posted job to ' + /resource);
});
```
