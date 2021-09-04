import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Avatar, IconButton, Typography } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';

const NoteCard = (props) => {
    return (
        <div>
            <Card elevation={5}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe">
                            69
                        </Avatar>
                    }
                    action={
                        <IconButton>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={props.noteProps.title}
                    subheader={props.noteProps.details}
                />
                <CardContent>
                    <Typography>
                        {props.noteProps.exp}
                    </Typography>
                </CardContent>
            </Card>
            {/* {props.noteProps.title} */}
        </div>
    )
}

export default NoteCard
