---
layout: project
title: "Robot Car"
technologies: [Raspberry Pi, Mobile Robotics, ROS, Tkinter, Computer Vision, Linux, OpenCV, LiDAR, PyTorch, Machine Learning, Network Programming, Python, YOLO]
summary: "Built a Raspberry Pi–based robot car with sensors, LiDAR, and a camera; developed TCP/UDP servers for control and video streaming; and created a Tkinter + OpenCV client using YOLO models and optical flow for object detection and motion tracking."
---

# Robot Car
For this project, I designed and assembled a fully custom *Raspberry Pi–powered robot car* to deepen my understanding of robotics, electronics, and embedded systems. The hardware build included a Raspberry Pi SBC, DC motors, a motor controller shield, infrared and ultrasonic sensors, a LiDAR module, a PiCamera, and a rechargeable battery pack—all mounted on a plexiglass chassis to create a compact, mobile robotics platform.

On the software side, I implemented a *TCP server* on the Raspberry Pi to handle navigation commands, system status, and sensor data, along with a *UDP server* dedicated to streaming the camera feed in real time. This communication architecture provided a responsive and efficient control interface.

To operate the robot, I developed a *desktop client application* using Tkinter, OpenCV, and YOLO-based models (YOLOv3/YOLOv8). The client enabled remote control of the robot while simultaneously processing the live video feed for *object detection* and *motion tracking* using dense optical flow. These computer-vision features allowed the robot to interpret and respond to its environment, forming the foundation for more advanced autonomous behaviors.

This project brought together hardware assembly, low-level networking, computer vision, and machine learning to create an end-to-end mobile robotics system.

### Images
![car1](/assets/img/robotcar/robot-car.png)

{: .img-row style="display:flex; gap:10px;"}
![car2](/assets/img/robotcar/robot-vision1.png){: width="316" }
![car3](/assets/img/robotcar/robot-vision2.png){: width="316" }

