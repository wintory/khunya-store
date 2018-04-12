import React from 'react';

import { storiesOf, action, linkTo } from '@kadira/storybook';

import Button from './Button';

import Welcome from './Welcome';



import Results from '../components/Result';

import githubHelpers from '../utils/githubHelpers';



storiesOf('Welcome', module)

  .add('to Storybook', () => (

    <Welcome showApp={linkTo('Button')} />

  ));



storiesOf('Button', module)

  .add('with text', () => (

    <Button onClick={action('clicked')}>Hello Button</Button>

  ))

  .add('with some emoji', () => (

    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>

  ));







var playersInfo =

  {

    "id": 1,

    "title": "test page#1",

    "content": "TEST PAGE CONTENT"

  };



storiesOf('Container', module)

  .add('WithResultsContainer', () => (



    <Results

      isLoading={false}

      playersInfo={playersInfo}

      scores={1} />

  ));