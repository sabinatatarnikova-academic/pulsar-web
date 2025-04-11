import React from 'react';
import { Avatar, Box, Card, CardContent, Typography, Stack } from '@mui/material';
import {useNavigate} from "react-router-dom";
import {UserData} from "../data/data";

interface UserCardProps {
    user: UserData;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    const { name, lastName, avatarUrl, position } = user;
    const navigate = useNavigate();

    return (
        <Card
            sx={{
                width: '100%',
                maxHeight: 168,
                borderRadius: 2,
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                transition: 'box-shadow 0.3s ease-in-out',
                '&:hover': {
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
                    cursor: 'pointer',
                }
            }}
            onClick={() => navigate(`/users/${user.id}`)}
        >
            <CardContent>
                <Stack direction="row" spacing={2.5} alignItems="center">
                    <Avatar
                        src={avatarUrl}
                        alt={`${name} ${lastName}`}
                        sx={{
                            width: 64,
                            height: 64,
                        }}
                    />
                    <Box>
                        <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                            {name} {lastName}
                        </Typography>
                        {position && (
                            <Typography variant="body2" color="text.secondary">
                                {position}
                            </Typography>
                        )}
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default UserCard;