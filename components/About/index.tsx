import { useEffect } from 'react';
import Image from 'next/image';
import { nanoid } from 'nanoid';
import * as S from './style';

interface IInfo {
  id: string;
  title: string;
  description?: string;
}

const infos: Array<IInfo> = [
  {
    id: nanoid(),
    title: 'Front End Developer',
  },
  {
    id: nanoid(),
    title: 'Birth.',
    description: '1996.05.23',
  },
  {
    id: nanoid(),
    title: 'Residence.',
    description: 'Jeju, South Korea',
  },
  {
    id: nanoid(),
    title: 'Degree.',
    description: 'Jeju National University',
  },
  {
    id: nanoid(),
    title: 'Major.',
    description: 'Computer Engineering',
  },
];

interface Links {
  id: string;
  title: string;
  url: string;
}

const links: Array<Links> = [
  {
    id: nanoid(),
    title: 'Github',
    url: 'https://github.com/Yummy-sk',
  },
  {
    id: nanoid(),
    title: 'Blog',
    url: 'https://www.yeummy-blog.com',
  },
  {
    id: nanoid(),
    title: 'Resume',
    url: '#',
  },
  {
    id: nanoid(),
    title: 'Notion',
    url: 'https://sang-kwon-yeum.notion.site/Study-Planner-f0626b6006f64a248ce488865b097894',
  },
  {
    id: nanoid(),
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sang-kwon-yeum',
  },
];

const LinkContent = ({ link }: { link: Links }) => {
  return (
    <a href={link.url} target="_blank" rel="noreferrer">
      {link.title}
    </a>
  );
};

const TextContent = ({ info }: { info: IInfo }) => {
  return (
    <p>
      <span className="title">{info.title}</span>
      {info.description && <span className="description">{info.description}</span>}
    </p>
  );
};

export function About() {
  const handleScroll = ({ photoSection, infoSection }: { photoSection: Element; infoSection: Element }) => {
    const revealPoint = window.innerHeight * 5 - (window.innerHeight - 50);
    const currentScroll = window.scrollY;

    if (currentScroll > revealPoint) {
      console.log('reveal');
      photoSection.classList.add('reveal');
      infoSection.classList.add('reveal');
    } else if (currentScroll < revealPoint + 300) {
      photoSection.classList.remove('reveal');
      infoSection.classList.remove('reveal');
    }
  };

  useEffect(() => {
    const photoSection = document.querySelector('.photo-section') as Element;
    const infoSection = document.querySelector('.info-section') as Element;
    window.addEventListener('scroll', () => handleScroll({ photoSection, infoSection }));

    return () => {
      window.removeEventListener('scroll', () => handleScroll({ photoSection, infoSection }));
    };
  }, []);

  return (
    <S.Contatiner>
      <S.PhotoSection className="photo-section">
        <div className="img-wrapper">
          <Image src="/images/waggu.png" width={400} height={300} alt="profile-img" />
        </div>

        <p>
          Yeum
          <br />
          Sang Kwon
        </p>
      </S.PhotoSection>
      <S.InfoSection className="info-section">
        <S.InfoWrapper>
          {infos.map(info => (
            <TextContent key={info.id} info={info} />
          ))}
        </S.InfoWrapper>
        <S.LinkWrapper>
          {links.map(link => (
            <LinkContent key={link.id} link={link} />
          ))}
        </S.LinkWrapper>
      </S.InfoSection>
    </S.Contatiner>
  );
}
