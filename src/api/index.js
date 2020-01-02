import mockData from '../mock_data/MOCK_DATA.json';

const SITEMINDER = 'https://msdlvw-hhsces01.csc.nycnet/siteminderagent/forms/loginpages/wc/login.fcc'

export function login(params){

  var formDetails = {
    'user': params.user,
    'password': params.password,
    'agency': params.agency,
    'rememberMe':'false',
    'loginExe':'Sign In',
    'target':'/HHSWorkerConnectWeb/homePageRouter.jsp?agency=doitt',
    'users':'users',
    'smauthreason':'0'
  };
  const formBody = Object.keys(formDetails).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(formDetails[key])).join('&');

  return fetch(SITEMINDER, {
      headers: {
      'Content-Type':'application/x-www-form-urlencoded',
    },
    method: 'POST',
    body: formBody
  })
  .then( res => {console.log(res)} )
}

export function search(){
  return mockData
}
