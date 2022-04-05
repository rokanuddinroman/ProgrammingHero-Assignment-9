import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'
const Dashboard = () => {
    const [sales, setSalas] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setSalas(data))

    }, [])
    return (
        <div className="container">
            <h2>Sales Dashboard</h2>
            <div className="dashboard__container">
                <LineChart width={500} height={300} data={sales}>
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="month" />
                    <YAxis datakey="sell" />
                    <Tooltip />
                    <Legend />
                </LineChart>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={sales}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="revenue" stackId="1" stroke="#47DEAD" fill="#47DEAD" />
                        <Area type="monotone" dataKey="investment" stackId="1" stroke="#33A7FF" fill="#33A7FF" />
                    </AreaChart>
                </ResponsiveContainer>
                <BarChart width={500} height={300} data={sales}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" stackId="a" fill="#33A7FF" />
                    <Bar dataKey="investment" stackId="a" fill="#47DEAD" />
                </BarChart>
                <PieChart width={500} height={300}>
                    <Legend />
                    <Tooltip />
                    <Pie data={sales} dataKey="revenue" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={sales} dataKey="investment" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#47DEAD" label />
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;