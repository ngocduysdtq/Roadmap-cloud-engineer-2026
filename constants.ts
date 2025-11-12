import type { RoadmapPhase } from './types';

export const ROADMAP_DATA: RoadmapPhase[] = [
  {
    phase: 1,
    title: "Giai đoạn 1: Nền tảng Vững chắc (Quý 3-4/2024)",
    steps: [
      {
        id: "1-1",
        title: "Kiến thức Mạng máy tính (Networking)",
        description: "Hiểu sâu mô hình OSI, TCP/IP, DNS, HTTP/HTTPS, VPN, Load Balancing. Đây là nền tảng cốt lõi của mọi hệ thống cloud.",
        resources: [
          { name: "Khóa học Mạng máy tính (Coursera)", url: "https://www.coursera.org/learn/computer-networking" },
          { name: "Series về Mạng của Eli the Computer Guy", url: "https://www.youtube.com/watch?v=LANW3m7UgOM&list=PL27B9858F8551482E" },
        ],
      },
      {
        id: "1-2",
        title: "Hệ điều hành Linux & Scripting",
        description: "Thành thạo dòng lệnh, quản lý tiến trình, hệ thống file, user, permissions và viết BASH script để tự động hóa các tác vụ đơn giản.",
        resources: [
          { name: "Linux Journey", url: "https://linuxjourney.com/" },
          { name: "Learn Shell - Interactive Tutorial", url: "https://www.learnshell.org/" },
        ],
      },
      {
        id: "1-3",
        title: "Ngôn ngữ lập trình (Python/Go)",
        description: "Chọn một ngôn ngữ để tự động hóa. Python rất phổ biến cho scripting và SDK, trong khi Go mạnh mẽ cho các công cụ cloud-native.",
        resources: [
          { name: "Automate the Boring Stuff with Python", url: "https://automatetheboringstuff.com/" },
          { name: "A Tour of Go", url: "https://go.dev/tour/" },
        ],
      },
       {
        id: "1-4",
        title: "Quản lý phiên bản với Git",
        description: "Học cách sử dụng Git để quản lý source code và code hạ tầng (IaC). Nắm vững các lệnh cơ bản như clone, commit, push, pull, branch, merge.",
        resources: [
            { name: "Pro Git book", url: "https://git-scm.com/book/en/v2" },
            { name: "Learn Git Branching (Visual & Interactive)", url: "https://learngitbranching.js.org/" },
        ],
      },
    ],
  },
  {
    phase: 2,
    title: "Giai đoạn 2: Chinh phục Cloud & Chứng chỉ (Quý 1-2/2025)",
    steps: [
      {
        id: "2-1",
        title: "Chọn nhà cung cấp chính (AWS/Azure/GCP)",
        description: "Tập trung vào một nền tảng để hiểu sâu. AWS là lựa chọn phổ biến nhất, nhưng Azure và GCP cũng có nhu cầu nhân lực rất lớn.",
        resources: [
          { name: "So sánh Cloud (AWS vs Azure vs GCP)", url: "https://www.zdnet.com/article/aws-vs-azure-vs-google-cloud-whats-the-best-cloud-platform-for-the-enterprise/" },
        ],
      },
      {
        id: "2-2",
        title: "Học các Dịch vụ Cốt lõi",
        description: "Nắm vững các dịch vụ cơ bản: Compute (EC2, VMs), Storage (S3, Blob Storage), Networking (VPC, VNet), IAM, Databases (RDS, SQL Database), Serverless (Lambda, Functions).",
        resources: [
            { name: "A Cloud Guru", url: "https://acloudguru.com/" },
            { name: "FreeCodeCamp - AWS for Everyone", url: "https://www.youtube.com/watch?v=ulprqHHWlng" },
        ],
      },
      {
        id: "2-3",
        title: "Mục tiêu: Chứng chỉ Associate",
        description: "Thi lấy một chứng chỉ cấp độ Associate để xác thực kiến thức và làm đẹp CV. Đây là bước quan trọng để nhà tuyển dụng chú ý.",
        resources: [
          { name: "AWS Certified Solutions Architect - Associate (SAA-C03)", url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/" },
          { name: "Microsoft Certified: Azure Administrator Associate (AZ-104)", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/" },
          { name: "Google Associate Cloud Engineer", url: "https://cloud.google.com/certification/cloud-engineer" },
          { name: "Khóa học SAA-C03 của Stéphane Maarek (Udemy)", url: "https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/" },
        ],
      },
    ],
  },
  {
    phase: 3,
    title: "Giai đoạn 3: Tự động hóa & DevOps (Quý 3-4/2025)",
    steps: [
      {
        id: "3-1",
        title: "Infrastructure as Code (IaC) với Terraform",
        description: "Học cách định nghĩa và quản lý hạ tầng bằng code. Terraform là tiêu chuẩn ngành và hỗ trợ đa nền tảng cloud.",
        resources: [
          { name: "Terraform Learn", url: "https://developer.hashicorp.com/terraform/tutorials" },
          { name: "Terraform Up & Running (Book)", url: "https://www.terraformupandrunning.com/" },
        ],
      },
      {
        id: "3-2",
        title: "Containers (Docker) & Orchestration (Kubernetes)",
        description: "Hiểu cách đóng gói ứng dụng với Docker và quản lý chúng ở quy mô lớn với Kubernetes (K8s) - kỹ năng bắt buộc hiện nay.",
        resources: [
          { name: "Docker Get Started", url: "https://docs.docker.com/get-started/" },
          { name: "Kubernetes by Example", url: "https://kubernetesbyexample.com/" },
          { name: "CKA/CKAD Certification Path", url: "https://www.cncf.io/certification/cka/" },
        ],
      },
      {
        id: "3-3",
        title: "CI/CD (Continuous Integration/Continuous Deployment)",
        description: "Thiết lập các đường ống tự động hóa để xây dựng, kiểm thử và triển khai ứng dụng bằng GitHub Actions, GitLab CI, hoặc Jenkins.",
        resources: [
          { name: "GitHub Actions Documentation", url: "https://docs.github.com/en/actions" },
          { name: "GitLab CI/CD Documentation", url: "https://docs.gitlab.com/ee/ci/" },
        ],
      },
    ],
  },
  {
    phase: 4,
    title: "Giai đoạn 4: Chuyên sâu & Sẵn sàng phỏng vấn (Quý 1/2026)",
    steps: [
      {
        id: "4-1",
        title: "Giám sát (Monitoring) và Ghi log (Logging)",
        description: "Học cách sử dụng Prometheus, Grafana, ELK Stack hoặc các dịch vụ cloud-native (CloudWatch, Azure Monitor) để chủ động theo dõi sức khỏe hệ thống.",
        resources: [
          { name: "Prometheus Docs", url: "https://prometheus.io/docs/introduction/overview/" },
          { name: "Grafana Fundamentals", url: "https://grafana.com/docs/grafana/latest/introduction/" },
        ],
      },
      {
        id: "4-2",
        title: "Thực hành Bảo mật (Security)",
        description: "Tìm hiểu các nguyên tắc bảo mật cơ bản: IAM, security groups/NACLs, WAF, quản lý secrets, và các khái niệm DevSecOps.",
        resources: [
          { name: "AWS Security Best Practices", url: "https://aws.amazon.com/architecture/security-pillar/" },
        ],
      },
      {
        id: "4-3",
        title: "Xây dựng dự án thực tế",
        description: "Vận dụng kiến thức đã học để xây dựng một dự án hoàn chỉnh. Đây là bằng chứng tốt nhất về năng lực của bạn.",
        resources: [
          { name: "Project Idea: Deploy 3-tier web app with Terraform", url: "https://developer.hashicorp.com/terraform/tutorials/aws/aws-3-tier" },
          { name: "Project Idea: Build a Serverless API", url: "https://serverless-land.com/patterns" },
          { name: "Project Idea: CI/CD for a containerized app on K8s", url: "https://docs.gitlab.com/ee/ci/examples/deploy-to-kubernetes.html" },
        ],
      },
      {
        id: "4-4",
        title: "Quản lý Chi phí (Cost Management)",
        description: "Học cách theo dõi, phân tích và tối ưu hóa chi phí trên cloud. Đây là một kỹ năng quan trọng mà các công ty rất coi trọng.",
        resources: [
            { name: "AWS Cost Optimization Pillar", url: "https://aws.amazon.com/architecture/cost-optimization-pillar/" },
        ],
      },
    ],
  },
];
