import React from 'react';
import './IdCard.css';

const IdCard = () => {
  const idCard = [
    {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 1.78,
      birth: 'Tue Jul 14 1992',
      picture: 'https://randomuser.me/api/portraits/men/44.jpg',
      id: 1
    },
    {
      lastName: 'Delores ',
      firstName: 'Obrien',
      gender: 'female',
      height: 1.72,
      birth: 'Tue May 11 1993',
      picture: 'https://randomuser.me/api/portraits/women/44.jpg',
      id: 2
    },
  ];

  return (
    <div>
      {idCard.map(
        ({ lastName, firstName, gender, height, birth, picture }, id) => {
          return (
            <div key={lastName} className="Card">
              <div className="Row">
                <img src={picture} alt="photo" className="Card-photo" />
                <div className="Card-text">
                  <p>
                    <strong>First name:</strong> {firstName}
                  </p>
                  <p>
                    <strong>Last name:</strong> {lastName}
                  </p>
                  <p>
                    <strong>Gender:</strong> {gender}
                  </p>
                  <p>
                    <strong>Height:</strong> {height}m
                  </p>
                  <p>
                    <strong>Birth: </strong>
                    {birth}
                  </p>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default IdCard;
