// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentRegistryV2 {
    struct Student {
        string name;
        uint age;
        bool isRegistered;
    }

    address public owner;
    mapping(address => Student) private students;

    event StudentRegistered(address indexed studentAddress, string name, uint age);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function registerStudent(address _studentAddress, string memory _name, uint _age) public onlyOwner {
        require(!students[_studentAddress].isRegistered, "Student already registered");
        students[_studentAddress] = Student(_name, _age, true);
        emit StudentRegistered(_studentAddress, _name, _age);
    }

    function getStudent(address _user) public view returns (string memory, uint, bool) {
        Student memory s = students[_user];
        return (s.name, s.age, s.isRegistered);
    }

    function isStudentRegistered(address _user) public view returns (bool) {
        return students[_user].isRegistered;
    }
}
