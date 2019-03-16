import React from "react";
import {
  Form,
  Input,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class InputBox extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <div className="drop-Down">
        <div>
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>Sizes</DropdownToggle>
            <DropdownMenu>
              <DropdownItem className="show-hide-items">
                Show/Hide Intermediate Sizes
                <span className="show-size1">UK/</span>
                <span className="show-size2">US/</span>
                <span className="show-size3">UK</span>
              </DropdownItem>
              <DropdownItem>
                <div className="size-list">
                  <div className="s1">
                    <div className="pd8">36</div>
                    <div className="pd8">37</div>
                    <div className="pd8">38</div>
                    <div className="pd8">39</div>
                    <div className="pd8">40</div>
                    <div className="pd8">41</div>
                  </div>
                  <div className="s2">
                    <div className="pd8">42</div>
                    <div className="pd8">43</div>
                    <div className="pd8">44</div>
                    <div className="pd8">45</div>
                    <div className="pd8">46</div>
                    <div className="pd8">47</div>
                  </div>
                  <div className="s3">
                    <div className="pd8">48</div>
                    <div className="pd8">49</div>
                    <div className="pd8">50</div>
                  </div>
                </div>
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </div>
        <div className="inputBox">
          <Form>
            <Input
              type="text"
              name="text"
              id="inputText"
              placeholder="Search"
            />
            <i className="fas fa-search" />
          </Form>
        </div>
      </div>
    );
  }
}

export default InputBox;
