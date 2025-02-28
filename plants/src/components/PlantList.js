import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../store/";
import Plant from "../components/Plant";
import styled from "styled-components";

const StyledDiv = styled.div``;

const PlantList = (props) => {
  const { fetchData } = props;

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  console.log(props);
  return (
    <StyledDiv className="plant-wrapper">
      {props.error && <p style={{ color: "red" }}>{props.error}</p>}
      {props.isLoading ? (
        <h3> Loading... </h3>
      ) : (
        props.plants.data.map((plant) => (
          <div className="Plant">
            <Plant key={plant.name} plant={plant} />
          </div>
        ))
      )}
    </StyledDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    plants: state.plants,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchData })(PlantList);
