import {Link} from '../routes'
import slug from '../helpers/slug'


export default class ChannelGrid extends React.Component {
    render () {

        const {channels} = this.props
 
        return <div className="channels">
            { channels.map((channel) =>
            ( 
                <Link route="channel" params={{ 
                    slug: slug(channel.title),
                    id: channel.id
                }} prefetch>
                    <a className="channel">
                        <img src={ channel.urls.logo_image.original} alt=""/>
                        <h2>{channel.title}</h2>
                    </a>
                </Link>  
            )) }
                <style jsx>{`

.channels {
    width: 1200px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 15px;
    margin: 0 auto;
    
}
.channel {
    position: relative;
    width: 300px;
    height: 350px;
    background: #fff;
    margin: 0 auto;
    border-radius: 4px;
    box-shadow:0 2px 10px rgba(0,0,0,.2);
}
.channel:before,
.channel:after
{
    content:"";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background: #fff;
    transition: 0.5s;
    z-index:-1;
} 
.channel:hover:before{
    transform: rotate(20deg);
    box-shadow: 0 2px 20px rgba(0,0,0,.2);
    }
.channel:hover:after{
    transform: rotate(10deg);
    box-shadow: 0 2px 20px rgba(0,0,0,.2);
}
a.channel {
    display: block;
    margin-bottom: 0.5em;
    color: #333;
    text-decoration: none;

} 
.channel img {
    border-radius: 3px;
    box-shadow: 0px 2px 6px rgba(0,0,0,0.1);
    width: 100%;
}
h1 {
    font-weight: 600;
    padding: 15px;
}
h2 {
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 20px;
    color: #777;
    text-transform: uppercase;
    text-align: center;
}
`}</style>
        </div>
    }    
}