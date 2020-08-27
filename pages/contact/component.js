import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

import { red } from '@material-ui/core/colors'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import DraftsIcon from '@material-ui/icons/Drafts'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import CallIcon from '@material-ui/icons/Call'

import { Divider } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

function Contact({ posts }) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState([])

  const handleExpandClick = (cell) => {
    if (expanded.includes(cell)) {
      return setExpanded(expanded.filter((item) => item !== cell))
    }
    return setExpanded([cell, ...expanded])
  }

  return (
    <Container maxWidth="sm">
      <Box my={7}>
        {posts.results && posts.results.map((contact) => (
          <Card className={classes.root} style={{ marginBottom: 20 }} key={contact.email}>
            <CardHeader
              avatar={(
                <Avatar aria-label="recipe" className={classes.avatar} src={contact.picture.thumbnail}>
                  {contact.name.last[0]}
                </Avatar>
              )}
              action={(
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded.includes(contact.cell),
                  })}
                  onClick={() => handleExpandClick(contact.cell)}
                  aria-expanded={expanded.includes(contact.cell)}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              )}
              title={`${contact.name.title} ${contact.name.first} ${contact.name.last}`}
              subheader={contact.cell}
            />
            <Divider />
            <Collapse in={expanded.includes(contact.cell)} timeout="auto" unmountOnExit>
              {expanded.includes(contact.cell) && (
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem button>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <Typography variant="subtitle1" component="p">{contact.email}</Typography>
                  </ListItem>

                  <ListItem button>
                    <ListItemIcon>
                      <LocationOnIcon />
                    </ListItemIcon>
                    <Typography variant="subtitle1" component="p">
                      {`${contact.location.city}, ${contact.location.country}`}
                    </Typography>
                  </ListItem>

                  <ListItem button>
                    <ListItemIcon>
                      <CallIcon />
                    </ListItemIcon>
                    <Typography variant="subtitle1" component="p">
                      {`${contact.cell}`}
                    </Typography>
                  </ListItem>

                  <ListItem button>
                    <ListItemIcon>
                      <CallIcon />
                    </ListItemIcon>
                    <Typography variant="subtitle1" component="p">
                      {`${contact.phone}`}
                    </Typography>
                  </ListItem>

                </List>
              )}
            </Collapse>
          </Card>
        ))}

      </Box>
    </Container>
  )
}

Contact.defaultProps = {
  posts: {},
}

Contact.propTypes = {
  posts: PropTypes.objectOf(PropTypes.object),
}

export default Contact
