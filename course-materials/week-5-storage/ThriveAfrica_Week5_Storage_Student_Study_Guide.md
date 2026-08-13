# ThriveAfrica AWS Cloud Practitioner
# Week 5 — Storage Study Guide

## What you should know

After this lesson, you should be able to:

- Distinguish block, file, and object storage and pick the right type from a scenario.
- Explain Amazon S3 durability, availability, buckets, versioning, lifecycle policies, replication, Block Public Access, and Object Lock.
- Match all seven S3 storage classes to access patterns, retrieval times, and minimum storage durations.
- Compare EBS volume types, incremental snapshots, and instance store.
- Choose between EFS and Amazon FSx for Windows File Server.
- Recognize Storage Gateway, AWS Backup, and AWS Elastic Disaster Recovery use cases.

---

## ▶ 1. Block vs file vs object

Three storage models appear constantly on CLF-C02.

| Type | How data is stored | Typical AWS service | Scenario clue |
|---|---|---|---|
| **Block** | Raw volumes of blocks, like a virtual hard disk | Amazon EBS, instance store | “Attach a disk to one EC2 instance,” boot volume, database volume |
| **File** | Shared file system with folders and file paths | Amazon EFS, Amazon FSx | “Many Linux servers need a shared NFS mount,” “Windows SMB shares” |
| **Object** | Objects in buckets, accessed by key (URL-style) | Amazon S3 | “Static website assets,” “backups and archives,” “unlimited object storage” |

Memory line:

> Block = disk for one server • File = shared folder • Object = bucket of objects

---

## ▶ 2. Amazon S3 foundations

Amazon Simple Storage Service is **object storage**. You store objects inside **buckets**.

### Buckets and objects

- A bucket name must be **globally unique**.
- Objects have a key (name/path), data, and metadata.
- S3 is a **regional** service: you choose a Region when creating a bucket.
- Objects are accessed over HTTPS using the AWS API, console, CLI, or SDKs.

### Durability vs availability

These words are easy to mix up on the exam.

| Concept | Meaning | S3 Standard example cue |
|---|---|---|
| **Durability** | Will the object survive without loss? | Designed for **11 nines** (99.999999999%) durability |
| **Availability** | Can you retrieve the object when you need it? | Designed for high availability; classes differ |

Think:

> Durability = do not lose the data • Availability = can I get it now?

### Versioning

Bucket versioning keeps multiple versions of an object when it is overwritten or deleted.

- Overwrite creates a new version.
- A delete can create a delete marker instead of permanently removing earlier versions.
- Useful for recovery from accidental overwrite or delete.

### Block Public Access

**S3 Block Public Access** settings help prevent public access to buckets and objects.

- New buckets typically have Block Public Access enabled by default.
- Exam clue: “prevent accidental public access” → Block Public Access.

### Object Lock

**S3 Object Lock** can make objects **WORM** (write once, read many) for a retention period.

- Used for compliance retention and immutability requirements.
- Requires versioning.

### Replication

**S3 Replication** copies objects to another bucket.

- Same-Region Replication (SRR) or Cross-Region Replication (CRR).
- Versioning must be enabled on source and destination.
- Exam clue: “copy objects to another Region for disaster recovery or compliance” → Cross-Region Replication.

### Lifecycle policies

A lifecycle rule automatically transitions or expires objects over time.

Common pattern from this week’s lab:

1. Transition to Infrequent Access after **30** days.
2. Transition to Glacier storage after **90** days.
3. Expire (delete) after **365** days.

Lifecycle = automatic cost optimization without manual class changes every day.

---

## ▶ 3. All seven S3 storage classes

For CLF-C02, know the seven classes, when to use each, retrieval behavior, and minimum storage duration where it matters.

| Storage class | Best for | Retrieval | Minimum duration (exam-level) |
|---|---|---|---|
| **S3 Standard** | Frequently accessed data | Milliseconds | None |
| **S3 Intelligent-Tiering** | Unknown or changing access patterns | Milliseconds for Frequent/Infrequent Access tiers | Monitoring fee; archive tiers have longer minimums if used |
| **S3 Standard-IA** | Infrequent access, still needs rapid retrieval | Milliseconds | **30 days** |
| **S3 One Zone-IA** | Infrequent access that can live in a single AZ | Milliseconds | **30 days** |
| **S3 Glacier Instant Retrieval** | Archive that must be retrieved in milliseconds | Milliseconds | **90 days** |
| **S3 Glacier Flexible Retrieval** | Archive; minutes-to-hours retrieval OK | Expedited ~1–5 min; Standard ~3–5 hours; Bulk ~5–12 hours | **90 days** |
| **S3 Glacier Deep Archive** | Lowest-cost long-term archive | Standard ~12 hours; Bulk up to ~48 hours | **180 days** |

### Decision shortcuts

- Need it often and immediately → **Standard**
- Access pattern unknown → **Intelligent-Tiering**
- Rarely needed, but immediately → **Standard-IA** or **Glacier Instant Retrieval**
- Rarely needed and can wait hours → **Glacier Flexible Retrieval**
- Keep for years, cheapest archive → **Glacier Deep Archive**
- Can tolerate loss of one AZ → **One Zone-IA**

Important:

> One Zone-IA stores data in a **single** Availability Zone. Multi-AZ durability is not the same as Standard-IA.

---

## ▶ 4. Amazon EBS and instance store

### Amazon EBS

Amazon Elastic Block Store provides **persistent block volumes** for EC2 instances.

- An EBS volume lives in **one Availability Zone**.
- To move a volume’s data to another AZ, create a **snapshot**, then create a new volume from that snapshot in the target AZ.
- Snapshots are stored in **Amazon S3** (managed by AWS) and are **incremental**: only changed blocks after the first snapshot are stored.

### Common EBS volume types (Cloud Practitioner level)

| Type | Category | Scenario clue |
|---|---|---|
| **gp3 / gp2** | General-purpose SSD | Most boot volumes and everyday workloads |
| **io1 / io2** | Provisioned IOPS SSD | Consistent high IOPS, critical databases |
| **st1** | Throughput-optimized HDD | Large sequential workloads such as big data or log processing |
| **sc1** | Cold HDD | Infrequently accessed, lowest-cost HDD |
| Magnetic (previous generation) | Legacy HDD | Older exam mentions only; prefer modern types |

### Instance store

Instance store is **temporary** block storage physically attached to the host.

- Data is lost if the instance stops, terminates, or the underlying host fails.
- Fast local performance for temporary data, caches, buffers, or scratch space.
- Not a backup solution.

Memory line:

> EBS persists • Instance store is ephemeral

---

## ▶ 5. Amazon EFS vs Amazon FSx for Windows File Server

| Service | Protocol / OS fit | Scope | Scenario clue |
|---|---|---|---|
| **Amazon EFS** | NFS; Linux / Unix style | Regional; multi-AZ file system | “Shared file system for many Linux EC2 instances across AZs” |
| **Amazon FSx for Windows File Server** | SMB; Windows | Managed Windows file server features | “Active Directory,” “Windows file shares,” “SMB” |

Other FSx family members exist (for example Lustre for high-performance computing). For this week, focus on **EFS versus FSx for Windows File Server**.

---

## ▶ 6. AWS Storage Gateway

Storage Gateway connects **on-premises** environments to AWS storage.

| Gateway type | What it presents | Typical use |
|---|---|---|
| **File Gateway** | NFS / SMB file share | File data into S3 |
| **Volume Gateway** | iSCSI block volumes | On-premises volumes backed by AWS (cached or stored) |
| **Tape Gateway** | Virtual tape library | Replace physical tapes with virtual tapes in AWS |

Exam clue:

> “Hybrid” + “on-premises applications need cloud storage” → Storage Gateway, then pick File / Volume / Tape from the interface requirement.

---

## ▶ 7. AWS Backup and Elastic Disaster Recovery

### AWS Backup

Centralized backup service to define backup plans across supported AWS resources (for example EBS, EFS, RDS, DynamoDB, and others depending on feature support).

Exam clue:

> “One place to manage backups and retention across services” → AWS Backup

### AWS Elastic Disaster Recovery (DRS)

Helps replicate servers to AWS and recover them quickly after a disruption.

Exam clue:

> “Minimize downtime after on-premises or cloud server failure” / “lift recovery into AWS” → Elastic Disaster Recovery

Do not confuse:

- **Backup** = protect and restore data copies on a schedule.
- **Disaster recovery** = restore whole systems and operations after an outage.

---

## ▶ 8. Exam decision map

| Requirement | Best starting answer |
|---|---|
| Unlimited object storage / static assets / data lake landing zone | Amazon S3 |
| Prevent accidental public bucket access | S3 Block Public Access |
| Recover overwritten objects | S3 Versioning |
| Compliance WORM retention | S3 Object Lock |
| Auto-move old objects to cheaper classes | S3 Lifecycle |
| Copy objects to another Region | S3 Cross-Region Replication |
| Unknown access pattern | S3 Intelligent-Tiering |
| Lowest-cost long-term archive (hours OK) | S3 Glacier Deep Archive |
| Persistent disk for one EC2 instance | Amazon EBS |
| Temporary local disk on the host | Instance store |
| Shared Linux file system across AZs | Amazon EFS |
| Managed Windows / SMB file server | Amazon FSx for Windows File Server |
| On-premises files into S3 | Storage Gateway — File Gateway |
| On-premises iSCSI volumes to AWS | Storage Gateway — Volume Gateway |
| Virtual tape replacement | Storage Gateway — Tape Gateway |
| Centralized backup plans | AWS Backup |
| Server replication / rapid failover into AWS | Elastic Disaster Recovery |

---

## ▶ 9. Common exam traps

- Durability is not the same as availability.
- One Zone-IA is **not** multi-AZ.
- Glacier Flexible Retrieval and Deep Archive are **not** millisecond retrieval (Instant Retrieval is).
- Lifecycle transitions still respect minimum storage durations for IA and Glacier classes.
- EBS volumes do not automatically span Availability Zones.
- Snapshots are incremental; the first is full, later ones store changes.
- Instance store data disappears when the instance stops or terminates.
- EFS is not the Windows SMB answer; FSx for Windows File Server is.
- Storage Gateway is the hybrid bridge; S3 alone is not an on-premises file protocol.
- AWS Backup is not the same product as Elastic Disaster Recovery.

---

# Week 5 Knowledge Check

Choose one answer for each question. Target score: **14/20 or higher** (70%).

## Q1. Which storage type stores data as objects inside buckets?

- A — Block storage
- B — File storage
- C — Object storage
- D — Tape-only storage

## Q2. A company needs a virtual hard disk attached to a single EC2 instance. Which storage model fits best?

- A — Object storage
- B — Block storage
- C — Content delivery network
- D — DNS hosting

## Q3. Which statement correctly compares durability and availability for Amazon S3?

- A — Durability means the object can be retrieved immediately; availability means it is never deleted
- B — Durability means the data is protected from loss; availability means the data can be accessed when needed
- C — They mean exactly the same thing
- D — Availability only applies to EBS

## Q4. What does S3 Block Public Access help prevent?

- A — Accidental public access to buckets and objects
- B — Cross-Region replication
- C — Version creation
- D — Lifecycle transitions

## Q5. A compliance team must keep objects immutable for a fixed retention period. Which S3 feature fits?

- A — S3 Object Lock
- B — S3 Transfer Acceleration
- C — S3 Inventory only
- D — EC2 user data

## Q6. Which storage class is designed for unknown or changing access patterns?

- A — S3 Standard-IA
- B — S3 Intelligent-Tiering
- C — S3 Glacier Deep Archive
- D — S3 One Zone-IA

## Q7. What is the minimum storage duration commonly associated with S3 Standard-IA on the exam?

- A — None
- B — 30 days
- C — 90 days
- D — 180 days

## Q8. Which class is the lowest-cost option for long-term archives when retrieval in about 12 hours is acceptable?

- A — S3 Standard
- B — S3 Glacier Instant Retrieval
- C — S3 Glacier Deep Archive
- D — S3 One Zone-IA

## Q9. Which statement about S3 One Zone-IA is true?

- A — It stores data across multiple Availability Zones by default
- B — It stores data in a single Availability Zone
- C — It is only for Windows file shares
- D — It requires Tape Gateway

## Q10. An EBS volume exists in Availability Zone A. How can the data be rebuilt in Availability Zone B?

- A — Attach the same volume directly to an instance in AZ B
- B — Create a snapshot, then create a new volume from the snapshot in AZ B
- C — Enable S3 Object Lock on the volume
- D — Convert the volume to Glacier Deep Archive

## Q11. Which statement about EBS snapshots is correct?

- A — Every snapshot always recopies all previous data in full with no incremental design
- B — Snapshots are incremental after the first snapshot
- C — Snapshots can only be created for instance store volumes
- D — Snapshots delete the source volume automatically

## Q12. What happens to data on instance store when an EC2 instance is stopped or terminated?

- A — It is automatically copied to S3 Glacier
- B — It persists indefinitely
- C — It is lost
- D — It converts to an EBS volume

## Q13. Multiple Linux EC2 instances across Availability Zones need a shared file system. Which service fits best?

- A — Amazon EFS
- B — Instance store
- C — A single EBS volume attached to all instances
- D — Amazon FSx for Windows File Server only

## Q14. A company needs managed Windows file shares using SMB and Active Directory integration. Which service is the best starting answer?

- A — Amazon EFS
- B — Amazon FSx for Windows File Server
- C — S3 Glacier Flexible Retrieval
- D — Elastic Load Balancing

## Q15. Which Storage Gateway type presents NFS or SMB file shares and stores file data in Amazon S3?

- A — File Gateway
- B — Tape Gateway
- C — Volume Gateway only
- D — Application Load Balancer

## Q16. Which Storage Gateway type is designed to replace physical tape infrastructure with virtual tapes?

- A — File Gateway
- B — Volume Gateway
- C — Tape Gateway
- D — AWS Artifact

## Q17. Which service provides centralized backup plans across supported AWS resources?

- A — AWS Backup
- B — Amazon CloudFront
- C — Amazon Route 53
- D — AWS WAF

## Q18. Which service is focused on replicating servers and recovering them quickly into AWS after a disruption?

- A — AWS Elastic Disaster Recovery
- B — Amazon S3 Transfer Acceleration
- C — Amazon Lightsail
- D — AWS Artifact

## Q19. A lifecycle rule moves objects to Infrequent Access after 30 days, Glacier storage after 90 days, and expires them after 365 days. What is the main goal?

- A — Force every object to stay in S3 Standard forever
- B — Automatically optimize cost as objects age
- C — Disable Block Public Access
- D — Convert EBS volumes into instance store

## Q20. A team overwrites an important object and needs an earlier copy. Which S3 feature makes that recovery possible?

- A — Versioning
- B — One Zone-IA
- C — Instance store
- D — Dedicated Hosts

---

## ▶ Tutor Answer Key

1. **C** — Amazon S3 is object storage; objects live in buckets.
2. **B** — A disk attached to one EC2 instance is block storage (typically EBS).
3. **B** — Durability protects against loss; availability is about retrieving data when needed.
4. **A** — Block Public Access reduces the risk of accidental public exposure.
5. **A** — Object Lock provides WORM / retention immutability.
6. **B** — Intelligent-Tiering adapts when access patterns are unknown or changing.
7. **B** — Standard-IA has a 30-day minimum storage duration.
8. **C** — Glacier Deep Archive is the lowest-cost long-term archive class with hours-scale retrieval.
9. **B** — One Zone-IA keeps data in a single AZ.
10. **B** — Snapshots are regional; create a new volume in the target AZ from the snapshot.
11. **B** — After the first snapshot, later snapshots store changed blocks.
12. **C** — Instance store is ephemeral.
13. **A** — EFS provides a regional shared NFS file system for Linux workloads.
14. **B** — FSx for Windows File Server targets Windows/SMB use cases.
15. **A** — File Gateway presents file protocols and stores objects in S3.
16. **C** — Tape Gateway replaces physical tape workflows.
17. **A** — AWS Backup centralizes backup policy and retention.
18. **A** — Elastic Disaster Recovery focuses on server replication and recovery.
19. **B** — Lifecycle automation moves aging data to cheaper classes and can expire it.
20. **A** — Versioning retains prior object versions for recovery.

---

# Homework lab

## Version it, tier it, then take it down

Complete this lab in a tutor-approved training account and Region.

1. Create an S3 bucket. Note the **global unique name** rule and confirm **Block Public Access** is on.
2. Enable **versioning**. Upload a file, overwrite it, then restore the earlier version.
3. Add a **lifecycle** rule:
   - Transition to Infrequent Access after **30** days
   - Transition to Glacier storage after **90** days
   - Expire after **365** days
4. Manually change one object’s **storage class** and compare the pricing guidance shown in the console or documentation.
5. Create an **EBS volume**, take a **snapshot**, and create a new volume from that snapshot in a **different Availability Zone**.
6. Tear down: delete bucket objects/versions, delete the bucket, delete volumes, and delete the snapshot.

## Cost warning

S3 storage, requests, early-deletion charges for IA/Glacier classes, EBS volumes, and snapshots can incur charges. Use small test objects, keep resources only for the lab window, and verify teardown.

Recommended teardown order:

1. Empty the bucket (including all versions and delete markers)
2. Delete the bucket
3. Delete EBS volumes
4. Delete EBS snapshots
5. Confirm no unexpected volumes, snapshots, or buckets remain

AWS services, prices, quotas, and interfaces change. Use current AWS documentation when performing the lab.

---

Independent study material produced for ThriveAfrica. Not affiliated with, endorsed by, or sponsored by Amazon Web Services. AWS, Amazon S3, and related marks are trademarks of Amazon.com, Inc. or its affiliates. Service behavior, pricing, and Free Tier terms change — verify against AWS documentation before making decisions.
