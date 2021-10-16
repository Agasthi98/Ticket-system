import User from '../backend/models/userModel.js'
import chai from 'chai'
import chaiHttp from 'chai-http'
// import server from '../index.js'

chai.should()
chai.use(chaiHttp)

//------------------------------USER TEST CASES ---------------------------------

//user Register test
describe('Task APIs', () => {
  beforeEach((done) => {
    //Before each test we empty the database
    User.remove({}, (err) => {
      done()
    })
  })
  describe('POST /api/Register', () => {
    it('It should POST a new user', (done) => {
      const user = {
        fname: 'dave',
        lname: 'bulner',
        email: 'bulner@gmail.com',
        phoneNo: 714585475,
        password: '123456',
      }
      chai
        .request(server)
        .post('/api/')
        .send(user)
        .end((err, response) => {
          response.should.have.status(200)
          response.body.should.be.a('object')
          response.body.should.have.property('email').eq('bulner@gmail.com')
          response.body.should.have.property('password').eq('123456')
          done()
        })
    })
  })
})

//GET user profile test
describe('GET /api/profile/:id', () => {
  it('It should GET a user by ID', (done) => {
    const taskId = 1
    chai
      .request(server)
      .get('/api/profile' + taskId)
      .end((err, response) => {
        response.should.have.status(200)
        response.body.should.be.a('object')
        response.body.should.have.property('fname')
        response.body.should.have.property('lname')
        response.body.should.have.property('email')
        response.body.should.have.property('phoneNo')
        done()
      })
  })
})

//update profile

describe('PUT /api/user/:id', () => {
  it('It should PUT an registered user', (done) => {
    const taskId = 1
    const updateUser = {
      fname: 'max',
      lname: 'tenison',
      email: 'max@gmail.com',
      phoneNo: 714585475,
      password: '123456',
    }
    chai
      .request(server)
      .put('/api/profile/' + taskId)
      .send(updateUser)
      .end((err, response) => {
        response.should.have.status(200)
        response.body.should.be.a('object')
        response.body.should.have.property('fname').eq('max')
        response.body.should.have.property('lname').eq('tenison')
        response.body.should.have.property('email').eq('max@gmail.com')
        response.body.should.have.property('phoneNo').eq('714585475')
        done()
      })
  })
})

//------------------------------RECHARGE TEST CASES---------------------------------

//recharge test
describe('Task APIs', () => {
  beforeEach((done) => {
    //Before each test we empty the database
    User.remove({}, (err) => {
      done()
    })
  })
  describe('POST /api/recharge/addrecharge', () => {
    it('It should Recharge account', (done) => {
      const user = {
        userid: '615a01c7f74bbfb87b56772f',
        rechargeAmount: '1000',
        paymentMethod: 'visa',
      }
      chai
        .request(server)
        .post('/rechargeacc')
        .send(user)
        .end((err, response) => {
          response.should.have.status(200)
          response.body.should.be.a('object')
          response.body.should.have
            .property('userid')
            .eq('615a01c7f74bbfb87b56772f')
          response.body.should.have.property('rechargeAmount').eq('1000')
          response.body.should.have.property('paymentMethod').eq('visa')
          done()
        })
    })
  })
})

//GET recharge history
describe('POST /api/recharge/userRecharges', () => {
  it('It should display history', (done) => {
    const taskId = 1
    chai
      .request(server)
      .get('/rechargehistory' + taskId)
      .end((err, response) => {
        response.should.have.status(200)
        response.body.should.be.a('object')
        response.body.should.have.property('userid')
        response.body.should.have.property('rechargeAmount')
        response.body.should.have.property('paymentMethod')
        response.body.should.have.property('CreatedAt')
        done()
      })
  })
})

//------------------------------BUS ROUTES TEST CASES---------------------------------

//routes test
describe('Task APIs', () => {
  beforeEach((done) => {
    //Before each test we empty the database
    User.remove({}, (err) => {
      done()
    })
  })
  describe('POST api/bus/insertBus', () => {
    it('It should post routes', (done) => {
      const user = {
        userid: '615a01c7f74bbfb87b56772f',
        busId: '615a01c7fasd34fwrw2sd2343',
        busStation: 'kaduwela',
        price: '1000',
      }
      chai
        .request(server)
        .post('/tripAmount/:busId/:busStation')
        .send(user)
        .end((err, response) => {
          response.should.have.status(200)
          response.body.should.be.a('object')
          response.body.should.have
            .property('userid')
            .eq('615a01c7f74bbfb87b56772f')
          response.body.should.have
            .property('busId')
            .eq('615a01c7fasd34fwrw2sd2343')
          response.body.should.have.property('busStation').eq('kaduwela')
          done()
        })
    })
  })
})

//GET rouytes
describe('POST /api/routes', () => {
  it('It should display routes', (done) => {
    const taskId = 1
    chai
      .request(server)
      .get('/routes' + taskId)
      .end((err, response) => {
        response.should.have.status(200)
        response.body.should.be.a('object')
        response.body.should.have.property('userid')
        response.body.should.have.property('busId')
        response.body.should.have.property('routes')
        done()
      })
  })
})

//------------------------------TRIP HISTORY TEST CASES---------------------------------

describe('Task APIs', () => {
  beforeEach((done) => {
    //Before each test we empty the database
    User.remove({}, (err) => {
      done()
    })
  })
  describe('POST /api/bus/userTrips', () => {
    it('It should history', (done) => {
      const user = {
        userid: '615a01c7f74bbfb87b56772f',
        busId: '615a01c7fasd34fwrw2sd2343',
        busStation: 'kaduwela',
        price: '1000',
      }
      chai
        .request(server)
        .post('/trpHistory')
        .send(user)
        .end((err, response) => {
          response.should.have.status(200)
          response.body.should.be.a('object')
          response.body.should.have
            .property('userid')
            .eq('615a01c7f74bbfb87b56772f')
          response.body.should.have
            .property('busId')
            .eq('615a01c7fasd34fwrw2sd2343')
          response.body.should.have.property('busStation').eq('kaduwela')
          done()
        })
    })
  })
})

//GET trip history
describe('POST /api/bus/userTrips', () => {
  it('It should display trip history', (done) => {
    const taskId = 1
    chai
      .request(server)
      .get('/trpHistory' + taskId)
      .end((err, response) => {
        response.should.have.status(200)
        response.body.should.be.a('object')
        response.body.should.have.property('userid')
        response.body.should.have.property('busId')
        response.body.should.have.property('busStation')
        response.body.should.have.property('price')
        done()
      })
  })
})
