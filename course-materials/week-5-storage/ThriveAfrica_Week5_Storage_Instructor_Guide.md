# ThriveAfrica AWS Cloud Practitioner
# Week 5 — Storage Instructor Guide

Use this guide with `ThriveAfrica_Week5_Storage_Class.pptx`.

Class length: **90 minutes**  
Primary exam domain: **Domain 3 — Cloud Technology and Services**  
Secondary domain: **Domain 4 — Billing, Pricing, and Support**

## Class outcome

By the end of class, students should be able to:

1. Distinguish block, file, and object storage from a scenario.
2. Explain core Amazon S3 controls: durability versus availability, versioning, lifecycle, replication, Block Public Access, and Object Lock.
3. Match all seven S3 storage classes to access pattern, retrieval time, and minimum duration.
4. Choose EBS volume behavior, snapshots, or instance store correctly.
5. Select EFS or FSx for Windows File Server from OS and protocol clues.
6. Recognize Storage Gateway, AWS Backup, and Elastic Disaster Recovery use cases.

## Before class

- Open the PowerPoint in Presenter View.
- Sign in to a training AWS account if you will demonstrate S3 or EBS.
- Confirm the selected Region.
- Confirm that Block Public Access defaults are visible in the S3 create-bucket wizard.
- Keep a tiny text file ready to upload and overwrite for a versioning demo.
- Set or review an AWS Budget.
- Do not leave Glacier early-delete experiments or large volumes running after class.
- Remind students that IA and Glacier classes can have minimum duration charges.

## 90-minute lesson plan

| Time | Slides | Activity |
|---|---:|---|
| 0–5 min | 1–3 | Welcome, objectives, opening scenario |
| 5–15 min | 4–6 | Block vs file vs object |
| 15–30 min | 7–11 | S3 foundations, durability, security, lifecycle, replication |
| 30–45 min | 12–15 | Seven storage classes and retrieval rules |
| 45–58 min | 16–19 | EBS types, snapshots, instance store |
| 58–72 min | 20–23 | EFS, FSx, Storage Gateway |
| 72–80 min | 24–25 | AWS Backup and Elastic Disaster Recovery |
| 80–86 min | 26–28 | Decision sprint, traps, lab preview |
| 86–90 min | 29–30 | Recap, homework, teardown reminder |

If time is short, compress Slides 20–23 into a rapid comparison table and assign the full quiz as homework. Do not skip the recap or the teardown warning.

---

## Slide-by-slide teaching notes

## Slides 1–3 — Welcome and opening scenario

### Say

“Today is about choosing storage from the workload constraint. The exam almost never asks you to recite a feature list. It gives a scenario and asks which storage type, class, or service fits.”

### Ask

“A company has photos for a website, a database disk for one server, and a shared folder for many Linux servers. Are those the same kind of storage?”

Expected answers:

- No
- Website photos → object storage
- Database disk → block storage
- Shared Linux folder → file storage

### Transition

“We will start with those three models, then spend most of the class on Amazon S3 because it dominates Cloud Practitioner storage questions.”

---

## Slides 4–6 — Block, file, and object

### Core explanation

| Type | Mental model | AWS starting point |
|---|---|---|
| Block | Virtual hard disk | EBS / instance store |
| File | Shared folder with paths | EFS / FSx |
| Object | Bucket of objects by key | S3 |

Memory line:

> Block = disk for one server • File = shared folder • Object = bucket of objects

### Ask the room

“Static images for a global website. Which model?”

Answer: **Object storage / Amazon S3**

### Teaching trap to avoid

Do not say EBS can be attached to many instances across AZs like a shared file system. That is the EFS pattern, not EBS.

---

## Slides 7–11 — Amazon S3 foundations

### What S3 is

Amazon S3 is object storage. Customers create buckets and store objects.

Emphasize:

- Bucket names are **globally unique**
- Buckets are created in a **Region**
- Objects have a key, data, and metadata

### Durability versus availability

This is a high-value vocabulary trap.

- **Durability:** protection against data loss. S3 Standard is designed for **11 nines** durability.
- **Availability:** ability to retrieve the object when requested. Classes differ.

Say:

“Eleven nines means Amazon designs S3 so object loss is extraordinarily unlikely. That is not the same claim as ‘you can always download it in milliseconds from every storage class.’”

### Versioning

- Overwrite creates a new version
- Delete can create a delete marker
- Earlier versions can be restored

Optional two-minute demo:

1. Create a privately blocked bucket
2. Enable versioning
3. Upload `notes.txt`
4. Overwrite it
5. Show Versions in the console

### Block Public Access and Object Lock

- **Block Public Access:** prevents accidental public exposure; enabled by default on new buckets
- **Object Lock:** WORM retention for compliance; requires versioning

### Lifecycle and replication

Lifecycle:

- Automates transitions and expiration
- Lab pattern: IA at 30 → Glacier at 90 → expire at 365

Replication:

- SRR or CRR
- Versioning required on source and destination
- CRR clue: another Region for DR or compliance

### Ask

“Prevent accidental public access to an S3 bucket. Which control?”

Answer: **S3 Block Public Access**

---

## Slides 12–15 — Seven storage classes

Teach decision-making, not memorization of every billing nuance.

### The seven classes

1. S3 Standard
2. S3 Intelligent-Tiering
3. S3 Standard-IA
4. S3 One Zone-IA
5. S3 Glacier Instant Retrieval
6. S3 Glacier Flexible Retrieval
7. S3 Glacier Deep Archive

### Retrieval and minimum duration cues

| Class | Retrieval cue | Minimum duration cue |
|---|---|---|
| Standard | Milliseconds | None |
| Intelligent-Tiering | Auto-moves; milliseconds for frequent/infrequent tiers | Watch archive-tier minimums if used |
| Standard-IA | Milliseconds | 30 days |
| One Zone-IA | Milliseconds; single AZ | 30 days |
| Glacier Instant Retrieval | Milliseconds archive | 90 days |
| Glacier Flexible Retrieval | Minutes to hours | 90 days |
| Glacier Deep Archive | ~12 hours standard; longer bulk | 180 days |

### Scenario drill

1. Unknown future access → **Intelligent-Tiering**
2. Rare access, need it immediately, multi-AZ → **Standard-IA** or **Glacier Instant Retrieval** depending on archive framing
3. Keep seven years, retrieve twice a year, hours OK → **Glacier Deep Archive**
4. Infrequent access and can tolerate one AZ loss → **One Zone-IA**

### Say

“If the question says ‘milliseconds’ and ‘archive,’ look at Glacier Instant Retrieval. If it says ‘lowest cost’ and ‘hours,’ look at Deep Archive.”

### Ask the room

Use the storage-class vote slide. Make students eliminate options that violate retrieval time or AZ requirements.

---

## Slides 16–19 — EBS and instance store

### Amazon EBS

- Persistent block storage for EC2
- A volume lives in **one Availability Zone**
- Snapshot → new volume is the path to another AZ

### Volume types at Cloud Practitioner depth

- **gp3 / gp2:** everyday SSD / boot volumes
- **io1 / io2:** provisioned IOPS for demanding databases
- **st1:** throughput HDD for large sequential work
- **sc1:** cold HDD, lowest-cost HDD tier

Do not over-teach every IOPS number. Teach the clue words.

### Snapshots

- Stored in Amazon S3 as an AWS-managed backup of volume blocks
- **Incremental** after the first snapshot
- Useful for backup and for rebuilding volumes in another AZ

### Instance store

- Temporary local disk on the host
- Lost on stop, terminate, or host failure
- Good for cache/scratch; never the only copy of important data

Memory line:

> EBS persists • Instance store is ephemeral

### Ask

“Database volume must survive stop/start and move to another AZ via snapshot. EBS or instance store?”

Answer: **EBS**

---

## Slides 20–23 — File storage and hybrid gateway

### EFS versus FSx for Windows File Server

| Clue | Service |
|---|---|
| Linux / NFS / many instances across AZs | Amazon EFS |
| Windows / SMB / Active Directory file shares | Amazon FSx for Windows File Server |

Mention briefly that the FSx family includes other engines, but this week’s exam focus is Windows File Server versus EFS.

### Storage Gateway

Bridge from on-premises to AWS:

- **File Gateway:** NFS/SMB → objects in S3
- **Volume Gateway:** iSCSI volumes backed by AWS
- **Tape Gateway:** virtual tapes replacing physical tape

### Ask

“On-premises Windows applications need SMB file shares that store files in S3. Which gateway?”

Answer: **File Gateway**

“Physical tape replacement?”

Answer: **Tape Gateway**

---

## Slides 24–25 — AWS Backup and Elastic Disaster Recovery

### AWS Backup

Central place to configure backup plans and retention across supported services.

Clue words:

> “Centralized backup,” “backup plan,” “retention across resources”

### AWS Elastic Disaster Recovery (DRS)

Replicates source servers and supports recovery into AWS with low recovery time objectives relative to rebuild-from-scratch approaches.

Clue words:

> “Fail over servers into AWS,” “disaster recovery for servers,” “replicate and recover”

### Distinction to force out loud

- Backup protects copies of data on a schedule.
- Disaster recovery restores business operations and systems after disruption.

Students often treat every “recovery” word as S3 versioning. Push them to read whether the object is a file, a volume, or a whole server estate.

---

## Slides 26–28 — Challenge, traps, and lab preview

Use the decision sprint as a class vote. Ask which requirement eliminated each wrong answer.

### High-value traps

- Durability ≠ availability
- One Zone-IA ≠ multi-AZ
- Flexible Retrieval / Deep Archive ≠ millisecond retrieval
- EBS volume ≠ multi-AZ attachment
- Instance store ≠ persistent disk
- EFS ≠ Windows SMB answer
- Backup ≠ Elastic Disaster Recovery

### Lab preview talking points

Walk the homework briefly:

1. Bucket + Block Public Access
2. Versioning overwrite/restore
3. Lifecycle 30 / 90 / 365
4. Manual storage-class change
5. EBS volume + snapshot + rebuild in another AZ
6. Full teardown

Say:

“If you leave volumes or incomplete multipart uploads behind, you can burn credits quietly. Empty every object version before deleting the bucket.”

---

## Slides 29–30 — Recap and homework

### Final recap

- Three storage models: block, file, object
- S3 = object storage with durability, versioning, lifecycle, replication, BPA, Object Lock
- Seven classes = access pattern + retrieval + minimum duration
- EBS persists in one AZ; snapshots move data; instance store is temporary
- EFS for Linux shared files; FSx Windows for SMB
- Storage Gateway for hybrid; Backup for centralized backups; DRS for server recovery

### Exit ticket

Ask students to answer in chat:

1. Name one difference between durability and availability.
2. Which S3 class fits unknown access patterns?
3. How do you rebuild an EBS volume in another AZ?

Answers: durability protects against loss while availability is about retrieving data now; Intelligent-Tiering; snapshot then create volume in the target AZ.

---

# Optional live demonstration

Keep the demo to about 10 minutes. Skip if account permissions are uncertain.

## S3 versioning and Block Public Access

1. Create a bucket with Block Public Access enabled.
2. Enable versioning.
3. Upload a small text object.
4. Overwrite it with different content.
5. Show both versions and restore the earlier one.
6. Open Management → Lifecycle and show where a 30/90/365 rule would be created. Creating the rule is optional in class.

## EBS snapshot rebuild

1. Create a small gp3 volume in AZ A.
2. Create a snapshot.
3. Create a volume from the snapshot in AZ B.
4. Show that the original volume cannot simply be re-attached across AZs.
5. Delete both volumes and the snapshot before class ends.

## Demo cautions

- Never disable Block Public Access “just to make a demo easier.”
- Do not upload sensitive student data.
- Snapshot and volume storage can incur charges.
- Glacier transitions in a live class are usually unnecessary; explain them instead of waiting for real transitions.

---

# Homework lab briefing

The course outline asks students to version an object, configure lifecycle tiering, change a storage class, and rebuild an EBS volume from a snapshot in another AZ.

Tell students:

1. Set or confirm a budget alert first.
2. Use the tutor-provided Region.
3. Keep objects tiny.
4. Record every resource created.
5. For lifecycle, configure IA at 30 days, Glacier at 90 days, expire at 365 days.
6. Remove resources in this order:
   - Delete all object versions and delete markers
   - Delete the bucket
   - Delete EBS volumes
   - Delete snapshots
7. Confirm that no lab bucket, volume, or snapshot remains.

Early deletion of IA or Glacier objects can create charges even when the lab is short. Prefer Standard for manual experiments unless the tutor asks otherwise.

# Quiz answer explanations

Use these when reviewing the knowledge check live or asynchronously.

1. **C** — S3 stores objects in buckets.
2. **B** — A disk for one EC2 instance is block storage.
3. **B** — Durability protects from loss; availability is retrievability.
4. **A** — Block Public Access reduces accidental public exposure.
5. **A** — Object Lock provides immutable retention.
6. **B** — Intelligent-Tiering fits unknown/changing patterns.
7. **B** — Standard-IA minimum duration is 30 days.
8. **C** — Deep Archive is lowest-cost long-term archive with hours-scale retrieval.
9. **B** — One Zone-IA uses a single AZ.
10. **B** — Snapshot, then create volume in the destination AZ.
11. **B** — Snapshots are incremental after the first.
12. **C** — Instance store data is lost on stop/terminate.
13. **A** — EFS is the shared Linux file system across AZs.
14. **B** — FSx for Windows File Server matches Windows/SMB.
15. **A** — File Gateway presents NFS/SMB and stores to S3.
16. **C** — Tape Gateway replaces physical tapes.
17. **A** — AWS Backup centralizes backup plans.
18. **A** — Elastic Disaster Recovery replicates/recovers servers.
19. **B** — Lifecycle automates cost-tiering and expiration.
20. **A** — Versioning retains prior object versions.

# Teaching traps to avoid

- Do not say every S3 class is equally available in milliseconds.
- Do not describe One Zone-IA as multi-AZ.
- Do not say an EBS volume can be attached simultaneously across multiple AZs like EFS.
- Do not treat instance store as a backup target.
- Do not answer every Windows file question with EFS.
- Do not equate AWS Backup with Elastic Disaster Recovery.
- Do not skip the teardown warning; leftover volumes and snapshots are common credit drains.
- Qualify lifecycle minimum-duration charges when students experiment with IA or Glacier.

# Sources to recheck before future deliveries

- Amazon S3 storage classes: https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html
- S3 lifecycle: https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html
- Amazon EBS volumes: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes.html
- Amazon EFS: https://docs.aws.amazon.com/efs/
- Amazon FSx for Windows File Server: https://docs.aws.amazon.com/fsx/latest/WindowsGuide/
- AWS Storage Gateway: https://docs.aws.amazon.com/storagegateway/
- AWS Backup: https://docs.aws.amazon.com/aws-backup/
- AWS Elastic Disaster Recovery: https://docs.aws.amazon.com/drs/

AWS prices, quotas, interfaces, and account offers change. Verify operational details before a live demonstration.

---

Independent study material produced for ThriveAfrica. Not affiliated with, endorsed by, or sponsored by Amazon Web Services. AWS, Amazon S3, and related marks are trademarks of Amazon.com, Inc. or its affiliates. Service behavior, pricing, and Free Tier terms change — verify against AWS documentation before making decisions.
