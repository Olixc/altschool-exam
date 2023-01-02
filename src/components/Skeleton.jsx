import React from "react";
import { SkeletonData } from "../context/context";
import "./skeleton.css";

export default function Skeleton({ type }) {
  const { USERS_PER_PAGE } = SkeletonData();
  const COUNTER = USERS_PER_PAGE;

  const PostSkeleton = () => (
    <div className="card">
      <div className="left">
        <div className="img"></div>
        <div className="title-container">
          <h2 className="title">&nbsp;</h2>
          <span className="phone">&nbsp;</span>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );

  const ProfileSkeleton = () => (
    <div className="profile-container-p">
      <div className="profile-img-p"></div>
      <div className="profile-name-p">
        <h1>&nbsp;</h1>
        <span>&nbsp;</span>
      </div>
    </div>
  );

  const TopSkeleton = () => (
    <div className="topSk">
      <div className="topSkIcon"></div>
      <div className="topSkIcon"></div>
      <div className="topSkIcon"></div>
      <div className="topSkImg"></div>
    </div>
  );

  const MenuSkeleton = () => (
    <div className="menuSk">
      <div className="menuSkItem"></div>
      <div className="menuSkItem"></div>
      <div className="menuSkItem"></div>
      <div className="menuSkItem"></div>
    </div>
  );

  const Circle = () => (
    <div
      className="circle"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {/* <CircularProgress /> */}
    </div>
  );

  const CustomLoading = () => (
    <div
      className="custom"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="balls">
        <div className="ball ball1"></div>
        <div className="ball ball2"></div>
        <div className="ball ball3"></div>
      </div>
      <span className="customText">Loading...</span>
    </div>
  );

  const CustomLoading2 = () => (
    <div
      className="custom"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "30vh",
      }}
    >
      <div className="balls">
        <div className="ball ball1"></div>
        <div className="ball ball2"></div>
        <div className="ball ball3"></div>
      </div>
      <span className="customText">Data Loading...</span>
    </div>
  );

  const CustomSuccess = (message) => (
    <div
      className="custom"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "30vh",
      }}
    >
      <span className="customText">{message}</span>
    </div>
  );

  if (type === "feed") return Array(COUNTER).fill(<FeedSkeleton />);
  if (type === "top") return <TopSkeleton />;
  if (type === "menu") return <MenuSkeleton />;
  if (type === "circle") return <Circle />;
  if (type === "custom") return <CustomLoading />;
  if (type === "custom2") return <CustomLoading2 />;
  if (type === "customSuccess") return <CustomSuccess />;
  if (type === "profile") return <ProfileSkeleton />;
  if (type === "post")
    return (
      <div className="card-container">
        {Array.from({ length: COUNTER }).map((_, index) => (
          <PostSkeleton key={index} />
        ))}
      </div>
    );
}
