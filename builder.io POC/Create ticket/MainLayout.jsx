"use client";
import React from "react";
import { Layout } from "antd";
import TopNavbar from "./TopNavbar";
import Sidebar from "./Sidebar";
import BreadcrumbNav from "./BreadcrumbNav";
import TicketForm from "./TicketForm";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout className="min-h-screen">
      <TopNavbar />
      <Layout>
        <Sidebar />
        <Layout className="pt-12 ml-52">
          <BreadcrumbNav />
          <Content className="px-6 py-5">
            <TicketForm />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
