// src/pages/Dashboard.tsx
import React, { useState } from "react";
import { toast } from "react-toastify";
// import EmployeeTable from "../components/EmployeeTable";
// import EmployeeFormModal from "../components/EmployeeFormModal";
import { Employee } from "../features/employees/employeeTypes";

const Dashboard: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );

  const handleEdit = (employee: Employee) => {
    setSelectedEmployee(employee);
    setModalOpen(true);
  };

  const handleCreate = () => {
    setSelectedEmployee(null);
    setModalOpen(true);
  };

  const handleSubmit = (formData: Partial<Employee>) => {
    if (selectedEmployee) {
      // Update logic here...
      toast.success("Employee updated successfully!");
    } else {
      // Create logic here...
      toast.success("Employee created successfully!");
    }
    setModalOpen(false);
  };

  return (
    <div>
      {/* <EmployeeTable onEdit={handleEdit} /> */}
      <button onClick={handleCreate}>Add Employee</button>
      {/* <EmployeeFormModal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
        employee={selectedEmployee || undefined}
      /> */}
    </div>
  );
};

export default Dashboard;
