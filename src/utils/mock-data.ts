import {ITestUserAuth, UserInfo } from "../service/types";
import avatar from "../images/avatar.png";
import avatarExtra from "../images/extra-avatar.png";

export const testUser: ITestUserAuth[] = [
    {
        email: "test@gmail.com",
        password: "1234",
    }
];

export const testUserInfo: UserInfo = 
    {
        userPhoto: avatar,
        userName: "Михаил",
        id: "2",
        messages: 2,
    }

    export const extraUserInfo: UserInfo = {
        userPhoto: avatarExtra,
        userName: "Анна",
        id: "1",
        messages: 0,
    }



    export  const events = [
        {
            title: 'Ментальная арифметика',
            start: '2024-06-09T13:00:00',
            end: '2024-06-09T13:45:00',
            status: 'attend'
        },
        {
            title: 'Lunch Break',
            start: '2024-06-12T12:00:00',
            end: '2024-06-12T13:00:00',
            status: 'pending'
        },
        {
            title: 'Conference Call',
            start: '2024-06-13T15:00:00',
            end: '2024-06-13T16:00:00',
            status: 'rejected'
        },
        {
            title: 'Project Deadline',
            start: '2024-06-14',
            allDay: true, // All-day event
            status: 'attend'
        },
        {
            title: 'Birthday Party',
            start: '2024-06-15T18:00:00',
            end: '2024-06-15T21:00:00',
            status: 'attend'
        }
    ];
