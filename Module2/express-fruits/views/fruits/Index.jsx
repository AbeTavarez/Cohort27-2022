const React = require("react");

class Index extends React.Component {
  render() {
    const {fruits} = this.props
    return (
      <div style={styles.container} className='container'>
        
        <h1 style={styles.header}>All Fruits</h1>
        <a style={styles.createFruitBtn} href='/fruits/new'>Create New Fruit</a>

        <ul style={styles.ulContainer}>
          {fruits.map((fruit, idx) => (
            <li style={styles.item}>
              The <a href={`/fruits/${fruit._id}`}>{fruit.name}</a> is {fruit.color}{" "}
              <br />
              {fruit.readyToEat
                ? `It is ready to eat`
                : `It is not ready to eat`}
            </li>
          ))}
        </ul>
        
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundColor: 'royalblue',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    fontSize: '32px',
    color: '#fff',

  },
  ulContainer: {
    backgroundColor: '#fff',
    padding: '15px'
  },
  createFruitBtn: {
    backgroundColor: '#fff',
    padding: '5px',
    borderRadius: '5px',
    textDecoration: 'none'
  },
  item: {
    padding: '10px',
    listStyleType: 'none'
  }
}

module.exports = Index;
