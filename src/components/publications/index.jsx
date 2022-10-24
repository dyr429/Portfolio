import { skeleton } from '../../helpers/utils';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ title, author, publisher }) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="my-0.5 text-xs">{author}</div>
    <h3 className="font-semibold">{title}</h3>
    <div className="mb-4 font-normal">{publisher}</div>
  </li>
);

const Publications = ({ publications, loading }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          author={skeleton({
            width: 'w-5/12',
            height: 'h-4',
          })}
          title={skeleton({
            width: 'w-6/12',
            height: 'h-4',
            className: 'my-1.5',
          })}
          publisher={skeleton({ width: 'w-6/12', height: 'h-3' })}
        />
      );
    }

    return array;
  };

  return (
    <>
      {publications?.length !== 0 && (
        <div className="card shadow-lg compact bg-base-100 col-span-1 lg:col-span-2">
          <div className="card-body">
            <div className="mx-3">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ width: 'w-32', height: 'h-8' })
                ) : (
                  <span className="text-base-content opacity-70">
                    Publications
                  </span>
                )}
              </h5>
            </div>
            <div className="text-base-content text-opacity-60">
              <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
                {loading ? (
                  renderSkeleton()
                ) : (
                  <Fragment>
                    {publications.map((publication, index) => (
                      <ListItem
                        key={index}
                        author={publication.Author}
                        title={publication.Title}
                        publisher={publication.Publisher}
                      />
                    ))}
                  </Fragment>
                )}
              </ol>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ListItem.propTypes = {
  time: PropTypes.node,
  position: PropTypes.node,
  company: PropTypes.node,
};

Publications.propTypes = {
  publications: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Publications;
