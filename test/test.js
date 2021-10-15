import User from '../backend/models/userModel.js'
import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../index.js'

chai.should();
chai.use(chaiHttp)


//------------------------------USER TEST CASES ---------------------------------

//user Register test
describe('Task APIs', ()=> {
    beforeEach((done) => { //Before each test we empty the database
        User.remove({}, (err) => {
           done();
        });
    });
    describe("POST /api/Register", () => {      
        it("It should POST a new user", (done) => {
           
         
            const user = {
                fname: "dave",
                lname: "bulner",
                email: "bulner@gmail.com",
                phoneNo: 714585475,
                password: "123456"
            };
             chai.request(server)                
                .post("/api/")
                .send(user)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('email').eq("bulner@gmail.com");
                    response.body.should.have.property('password').eq('123456');
                done()
                })
        });
})
})

//GET user profile test
describe("GET /api/profile/:id", () => {
    it("It should GET a user by ID", (done) => {
        const taskId = 1;
        chai.request(server)                
            .get("/api/profile" + taskId)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('fname');
                response.body.should.have.property('lname');
                response.body.should.have.property('email');
                response.body.should.have.property('phoneNo');
            done();
            });
    });
})


//update profile

describe("PUT /api/user/:id", () => {
    it("It should PUT an registered user", (done) => {
        const taskId = 1;
        const updateUser = {
                fname: "max",
                lname: "tenison",
                email: "max@gmail.com",
                phoneNo: 714585475,
                password: "123456"
        };
        chai.request(server)                
            .put("/api/profile/" + taskId)
            .send(updateUser)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('fname').eq("max");
                response.body.should.have.property('lname').eq("tenison");
                response.body.should.have.property('email').eq("max@gmail.com");
                response.body.should.have.property('phoneNo').eq("714585475");
            done();
            });
    });

})

