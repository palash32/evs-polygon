const routes = require('nextjs-routes')(); 

module.exports = routes()
  .add("/home", "/home")
  .add("/electionParty", "/electionParty")
  .add("/voterLogin", "/voterLogin")
  .add("/election/:address/create_election", "/election/create_election")
  .add("/election/:address/company_dashboard", "/election/company_dashboard")
  .add("/election/:address/voter_list", "/election/voter_list")
  .add("/election/:address/addcand", "/election/addcand")
  .add("/election/:address/vote", "/election/vote")
  .add("/election/:address/candidateList", "/election/candidateList");