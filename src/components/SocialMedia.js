import React from 'react';
import '../assets/style.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// celina-lind, hamlit1163, clind323, clind323@gmail.com


// Create a SocialMedia component that will display social media links with the ability to distinguish which link is which
export default function SocialMedia({ linkedInUser, discordUser, discordChannel, instagramUser, email, youtubeUser, tiktokUser, twitchUser }) {
    return (
        // Add social media links as icons for linkedin, github, instagram, youtube, tiktok, and email
        <div className='social-media'>
           {linkedInUser && <Button href={`https://www.linkedin.com/in/${linkedInUser}`} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </Button>}
            {discordUser && <Button href={`https://discordapp.com/users/${discordUser}`} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon="fa-brands fa-discord" />
            </Button>}
            {discordChannel && <Button href={`https://discordapp.com/invite/${discordChannel}`} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon="fa-brands fa-discord" />
            </Button>}
            {email && <Button href={`mailto:${email}`} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={['fab', 'google']} />
            </Button>}
            {instagramUser && <Button href={`https://www.instagram.com/${instagramUser}`} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={['fab', 'instagram']} />
            </Button>}
            {youtubeUser && <Button href={`https://www.youtube.com/channel/${youtubeUser}`} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={['fab', 'youtube']} />
            </Button>}
            {tiktokUser && <Button href={`https://www.tiktok.com/@${tiktokUser}`} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={['fab', 'tiktok']} />
            </Button>}
            {twitchUser && <Button href={`https://www.twitch.tv/${twitchUser}`} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={['fab', 'twitch']} />
            </Button>}
        </div>
    );
}