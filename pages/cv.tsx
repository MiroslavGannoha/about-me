import type { NextPage } from 'next';
import Link from 'next/link';

const CV: NextPage = () => {
  return (
    <>
    <div className="max-w-7xl">
    <h1 className="text-8xl text-primary-500">Miroslav Gannoha</h1>
      <h2 className="text-4xl">Senior Front-End JavaScript Software Engineer</h2>
      <h3 className="text-2xl">
        Senior software engineer with more then 8 years of experience in web development.
        UI and UX design competence. Tech trends follower. Always open to new ideas and knowledge.
        Excellent mentoring skills.
        Ready to work closely with both team and customers to identify most efficient and beneficial solutions for development and process improvement.
      </h3>
      <h3>Work History</h3>
      <article className="p-10">
        <aside>
          2020-10 - Current
        </aside>
        <section>
          <div>
            Senior Full Stack Engineer (Remote)
          </div>
          <div>
            Fluxon, San Francisco, California, US
          </div>
          <div>
            Worked on 2 projects: 1. Pluto
            Developed screen sharing permissions feature
            Improved and optimized requests handling to app&apos;s settings
            Refactored and cleaned up some parts of the code base and improved types.
            2. Zapier
            Helped launch new a version of the blog, by rapid bug fixing and thorough testing
            Proposed and implemented image optimization updates for the whole blog Together with teammate implemented "In Article call to action" feature that allowed CMS content editors to add special "call to action" contents to articles. Developed from ground up new homepage for main Zapier website with pixel- perfect approach. As part of that job for example I implemented custom (and built from scratch) "effort" slider section with "slides" and auto play.
          </div>
        </section>
      </article>
      <article className="p-10">
        <aside>
          2020-10 - Current
        </aside>
        <section>
          <div>
          Senior Software Engineer (Remote)
          </div>
          <div>
            Invictus Gurus, Dallas, Texas, US
          </div>
          <div>
            This portal helps law firm in Texas manage its employees as well as clients and perform business operations.
            I was responsible for frontend side of law firm portal and built it from ground up, designed UI and implemented it. Also helped BE devs design API for some specific cases. Starting from scratch led it to production, then maintained and developed it further.
            More details about my job:
            Bundled the frontend application using Webpack
            Designed UI by customer requirements and implemented it.
            Applied styling based on mock-ups provided using bootstrap framework.
            Helped design client specific server API
            Implemented storage system and in memory caching using mobx-state-tree Improved app loading time by 30% by splitting app bundle into chunks using webpack and reacts "lazy" imports
            Implemented dynamic menus and views/routes authorization system (admins able to modify views available for different roles through admins UI)
            Implemented drag and drop page for questionnaire builder
            Implemented billing page with stripe (react-stripe)
            Developed authentication system and components for staff users, client users and firms sign up process.
            Implemented Internationalization with react-intl
            Implemented a lot of views for CRUD management of different entities (e.g. meeting types, consultation statuses and types, news, notes, referral sources,
            resources, rights etc.) Table views to list paged data of all entities, form views to edit and create new items, and details views to see all item details and related info.
            Outcome:
            Portal using advanced technologies and excelent UI reduced paper work, bureaucracy within the firm and improved processes for staff and for clients.
          </div>
        </section>
      </article>
      <article className="p-10">
        <aside>
          2020-10 - Current
        </aside>
        <section>
          <div>
          Senior Software Engineer (Remote)
          </div>
          <div>
            Invictus Gurus, Dallas, Texas, US
          </div>
          <div>
            This portal helps law firm in Texas manage its employees as well as clients and perform business operations.
            I was responsible for frontend side of law firm portal and built it from ground up, designed UI and implemented it. Also helped BE devs design API for some specific cases. Starting from scratch led it to production, then maintained and developed it further.
            More details about my job:
            Bundled the frontend application using Webpack
            Designed UI by customer requirements and implemented it.
            Applied styling based on mock-ups provided using bootstrap framework.
            Helped design client specific server API
            Implemented storage system and in memory caching using mobx-state-tree Improved app loading time by 30% by splitting app bundle into chunks using webpack and reacts "lazy" imports
            Implemented dynamic menus and views/routes authorization system (admins able to modify views available for different roles through admins UI)
            Implemented drag and drop page for questionnaire builder
            Implemented billing page with stripe (react-stripe)
            Developed authentication system and components for staff users, client users and firms sign up process.
            Implemented Internationalization with react-intl
            Implemented a lot of views for CRUD management of different entities (e.g. meeting types, consultation statuses and types, news, notes, referral sources,
            resources, rights etc.) Table views to list paged data of all entities, form views to edit and create new items, and details views to see all item details and related info.
            Outcome:
            Portal using advanced technologies and excelent UI reduced paper work, bureaucracy within the firm and improved processes for staff and for clients.
          </div>
        </section>
      </article>
    </div>
      
    </>
  )
}

export default CV;
