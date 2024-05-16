import { Request, Response } from 'express';
import { Candidates } from '../../models/Condidates';
import { validationResult } from 'express-validator';

export async function getCandidatesFn(req: Request, res: Response) {
  try {
    const message = 'Candidates Executed Successfully';
    const candidates = await Candidates.find();
    res.status(200).json({ message, candidates });
  } catch (error) {
    res.status(500).send({ error });
  }
}

export async function addCandidateFn(req: Request, res: Response) {
  const {
    first_name,
    last_name,
    email,
    dob,
    residential_address_one,
    residential_address_two,
    permanent_address_one,
    permanent_address_two,
    documents
  } = req.body;

  if (!first_name) {
    return res.status(400).json({ message: 'First name is required' });
  }

  if (!last_name) {
    return res.status(400).json({ message: 'Last name is required' });
  }

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  if (!dob) {
    return res.status(400).json({ message: 'Date of birth is required' });
  }

  if (!first_name) {
    return res.status(400).json({ message: 'First name is required' });
  }

  if (!residential_address_one) {
    return res.status(400).json({ message: 'Residential address is required' });
  }

  if (!residential_address_two) {
    return res.status(400).json({ message: 'Residential address is required' });
  }

  if (!documents || documents.length < 2) {
    return res.status(400).json({ message: 'Upload at least two documents' });
  }

  try {
    const candidate = new Candidates({
      first_name,
      last_name,
      email,
      dob,
      residential_address_one,
      residential_address_two,
      permanent_address_one,
      permanent_address_two,
      documents
    });
    await candidate.save();
    return res.status(201).json({ message: 'Candidate added successfully', candidate });
  } catch (error) {
    console.error('Error adding candidate:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export async function updateCandidateFn(req: Request, res: Response) {
  try {
    const message = 'Candidates Executed Successfully';
    const users = await Candidates.find();
    res.status(200).json({ message, users });
  } catch (error) {
    res.status(500).send({ error });
  }
}

export async function deleteCandidateFn(req: Request, res: Response) {
  try {
    const message = 'Candidates Executed Successfully';
    const users = await Candidates.find();
    res.status(200).json({ message, users });
  } catch (error) {
    res.status(500).send({ error });
  }
}
