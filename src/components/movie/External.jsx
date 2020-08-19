import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookSquare, FaImdb } from "react-icons/fa";

const External = ({external}) => {
    
    return (
        <div className="external">
            {external.facebook_id && <a href={`https://facebook.com/${external.facebook_id}`} target='_blank' >  <FaFacebookSquare /></a>}
              {external.instagram_id && <a target='_blank'  href={`https://www.instagram.com/${external.instagram_id}`}> <AiOutlineInstagram /></a>}
              {external.twitter_id && <a target='_blank' href={`https://twitter.com/${external.twitter_id}`}>  <AiOutlineTwitter /></a>}
              {external.imdb_id && external.known_for_department == "Acting"  
              ?<a target='_blank' href={`https://www.imdb.com/name/${external.imdb_id}`}>  <FaImdb /></a>
              :<a target='_blank' href={`https://www.imdb.com/title/${external.imdb_id}`}>  <FaImdb /></a>}
        </div>
    )
}

export default External
