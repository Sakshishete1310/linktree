import './App.css';
import LinkCard from './LinkCard/LinkCard'

function App() {
  const data = [
    {
      title: 'twitter',
      tagline: 'Follow me on twitter',
      username: 'sakshishete123',
      link: "https://twitter.com/sakshishete123"
    },
     {
      title: 'facebook',
      tagline: 'Follow me on facebook',
      username: 'sakshishete123',
      link: "https://facebook.com/sakshishete123"
    },
    {
      title: 'linkdin',
      tagline: 'Follow me on linkdin',
      username: 'sakshishete123',
      link: "https://linkdin.com/sakshishete123"
    },
  ];
  return (
    <div className="container">
    <h3 className="app-title">linktree</h3>
    {
      data.map((Cardinfo)=>{
        return(
        <LinkCard title={Cardinfo.title} tagline={Cardinfo.tagline} username={Cardinfo.username}
        link={Cardinfo.link}/>
        );
        


      })
    }
     
    </div>
  );
}

export default App;
