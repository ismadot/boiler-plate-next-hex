"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest } from "@/adapters/redux/exampleSlice";
import { RootState } from "@/store";
import { useAppSelector } from "@/hooks";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, []);

  const { data, loading } = useAppSelector(
    (state: RootState) => state.example.baseCall
  );

  return (
    <>
      <h1>Welcome to the Home Page</h1>

      {loading && "loading..."}
      {data && <div>{data}</div>}
    </>
  );
};

export default Home;
