import React from 'react';

import {
  Card,
  Title,
  Image,
  LabelList,
  Label,
  BadgeList,
  Badge,
  MemberList,
  Member
} from 'react-card-object';

const children = [
  <Image alt="Steve Urkel" src="http://vignette4.wikia.nocookie.net/familymatters/images/e/e0/Steve_Urkel.jpg/revision/latest?cb=20140617201815" />,
  <Title>ReactCard</Title>,
  <p>A React Card with styled inline.</p>
];


React.render(<Card>{children}</Card>, document.getElementById('exampleOne'));

React.render(<Card style={{backgroundColor: "red", color: "white", padding: 30}}>{children}</Card>, document.getElementById('exampleTwo'));

React.render(<Card className="test-card">{children}</Card>, document.getElementById('exampleThree'));

React.render(<Card noStyle style={{position: "relative"}}>{children}</Card>, document.getElementById('exampleFour'));

const TrelloCardStyles = {
  root: {
    borderBottom: '1px solid #ccc',
    boxShadow: 'none',
    maxWidth: 200,
    font: '14px "Helvetica Neue",Arial,Helvetica,sans-serif',
    color: '#4d4d4d'
  },
  badgeList: {
    color: '#999'
  },
  memberList: {
    float: 'right',
    margin: '2px -8px -8px 0'
  },
  member: {
    display: 'inline-block',
    marginLeft: '.35em',
    backgroundColor: '#D6DADC',
    height: 30,
    width: 30,
    lineHeight: '30px',
    textAlign: 'center',
    borderRadius: 3,
    fontWeight: 'bold'
  }
};

const members = [
  'Carl Winslow',
  'Harriette Winslow',
  'Eddie Winslow',
  'Laura Winslow'
];

const TrelloCard = (
  <Card style={TrelloCardStyles.root}>
    <Image alt="Steve Urkel" src="http://vignette4.wikia.nocookie.net/familymatters/images/e/e0/Steve_Urkel.jpg/revision/latest?cb=20140617201815" />
    <LabelList>
      <Label style={{backgroundColor: '#2ECC40'}} />
      <Label style={{backgroundColor: '#FFDC00'}} />
      <Label style={{backgroundColor: '#FF851B'}} />
      <Label style={{backgroundColor: '#FF4136'}} />
      <Label style={{backgroundColor: '#B10DC9'}} />
    </LabelList>

    <p>Trello-like description/title.</p>

    <BadgeList style={TrelloCardStyles.badgeList}>
      <Badge><i className="fa fa-align-left" /></Badge>
      <Badge><i className="fa fa-comment-o" /> 6</Badge>
      <Badge><i className="fa fa-paperclip" /> 2</Badge>
      <Badge><i className="fa fa-check-square-o" /> 3/11</Badge>
    </BadgeList>

    <MemberList style={TrelloCardStyles.memberList}>
      {members.map((name) => {
        return <Member style={TrelloCardStyles.member} name={name} />;
      })}
    </MemberList>
  </Card>
);

React.render(TrelloCard, document.getElementById('exampleFive'));
